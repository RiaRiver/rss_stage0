const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Request failed.');
  }

  return response.json();
};

export default getData;
