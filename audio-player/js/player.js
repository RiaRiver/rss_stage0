export default class Player {
  constructor(playerSelector, tracks) {
    this.player = document.querySelector(playerSelector);
    this.tracks = tracks;
    this.prevTrack = 0;
    this.currentTrack = 0;
    this.nextTrack = 0;
    this.volume = 0.05;
    this.mousedown = false;
    this.audio = new Audio();
  }

  static formatTime(time) {
    const tempDate = new Date(time * 1000);
    return tempDate.toISOString().substring(11, 19).replace(/^0+/, '').replace(/^:/, '')
      .replace(/^0/, '');
  }

  getElement(element) {
    return this.player.querySelector(`.player__${element}`);
  }

  updateState() {
    this.prevTrack = this.tracks[this.currentTrack - 1]
      ? this.currentTrack - 1
      : this.tracks.length - 1;

    this.nextTrack = this.tracks[this.currentTrack + 1]
      ? this.currentTrack + 1
      : 0;
  }

  getTracks() {
    return ({
      prevTrack: this.tracks[this.prevTrack],
      currentTrack: this.tracks[this.currentTrack],
      nextTrack: this.tracks[this.nextTrack],
    });
  }

  setUp() {
    this.audio.src = this.tracks[this.currentTrack].url;
    this.updateState();
  }

  render() {
    const artist = this.getElement('artist');
    const title = this.getElement('title');
    const img = this.getElement('img');
    const imgPrev = this.getElement('imgPrev');
    const imgNext = this.getElement('imgNext');
    const currentTime = this.getElement('currentTime');
    const duration = this.getElement('duration');

    const { prevTrack, currentTrack, nextTrack } = this.getTracks();

    artist.textContent = currentTrack.artist;
    title.textContent = currentTrack.title;
    img.src = currentTrack.img;
    imgPrev.src = prevTrack.img;
    imgNext.src = nextTrack.img;
    currentTime.textContent = Player.formatTime(this.audio.currentTime);
    duration.textContent = Player.formatTime(this.audio.duration);
    this.audio.volume = this.volume;
  }

  handlePlayback() {
    const action = this.audio.paused ? 'play' : 'pause';

    this.audio[action]();
  }

  togglePlayButton(e) {
    const audio = e.target;
    const icon = audio.paused ? '#play-icon' : '#pause-icon';

    this.getElement('playIcon').setAttribute('href', icon);
  }

  toggleCoverAnimation(action) {
    const mainCover = this.getElement('main-wrapper');

    mainCover.dataset.animation = action;
  }

  changeAppearance(e) {
    this.togglePlayButton(e);
    this.toggleCoverAnimation(e.type);
  }

  updateCurrentTime(time) {
    this.getElement('currentTime').textContent = Player.formatTime(time);
  }

  fillProgressBar() {
    const progress = this.getElement('progressBar');

    progress.style.setProperty('--progress', `${progress.value}%`);
  }

  handleTimeUpdate() {
    if (this.mousedown) {
      const time = this.getProgressBarPosition();
      this.updateCurrentTime(time);
    } else {
      this.updateCurrentTime(this.audio.currentTime);
      const progressPercent = (((this.audio.currentTime / this.audio.duration) * 100) || 0)
        .toFixed(3);

      const progress = this.getElement('progressBar');

      progress.value = progressPercent;
    }
    this.fillProgressBar();

    if (this.audio.currentTime >= this.audio.duration) this.changeTrack();
  }

  getProgressBarPosition() {
    return Math.floor((this.getElement('progressBar').value * this.audio.duration) / 100);
  }

  changePosition() {
    const newPosition = this.getProgressBarPosition();

    this.audio.currentTime = newPosition;
  }

  changeTrack(e) {
    const isPlayed = !this.audio.paused;
    const changeDirection = e?.currentTarget.dataset.change || 'nextTrack';

    this.currentTrack = this[changeDirection];
    this.setUp();

    if (isPlayed || e === undefined) this.audio.play();
  }

  init() {
    const progress = this.getElement('progressBar');
    const play = this.getElement('play');
    const next = this.getElement('next');
    const prev = this.getElement('prev');

    this.setUp();

    this.audio.addEventListener('loadedmetadata', this.render.bind(this));

    play.addEventListener('click', this.handlePlayback.bind(this));

    this.audio.addEventListener('play', this.changeAppearance.bind(this));
    this.audio.addEventListener('pause', this.changeAppearance.bind(this));

    this.audio.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));

    progress.addEventListener('input', this.handleTimeUpdate.bind(this));
    progress.addEventListener('change', this.changePosition.bind(this));
    progress.addEventListener('mousedown', () => { this.mousedown = true; });
    progress.addEventListener('mouseup', () => { this.mousedown = false; });
    progress.addEventListener('touchstart', () => { this.mousedown = true; });
    progress.addEventListener('touchend', () => { this.mousedown = false; });

    prev.addEventListener('click', this.changeTrack.bind(this));
    next.addEventListener('click', this.changeTrack.bind(this));
  }
}
