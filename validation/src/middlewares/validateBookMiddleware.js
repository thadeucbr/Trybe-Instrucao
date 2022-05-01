/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const validateBookMiddleware = (req, res, next) => {
  const { title, price, description, pageNumber, inStock, imagePath, genre, authorId } = req.body;
  if (title === undefined) return res.status(400).json({ message: 'É necessário informar um title' });
  if (typeof title !== 'string') return res.status(400).json({ message: 'title deve ser do tipo string' });
  if (title.length > 100) return res.status(400).json({ message: 'o tamanho maximo do title nao pode ser maior que 100' });
  if (price === undefined) return res.status(400).json({ message: 'é necessário passar um price' });
  if (typeof Number(price) !== 'number') return res.status(400).json({ message: 'price deve ser um number' });
  if (Number(price) < 0) return res.status(400).json({ message: 'price nao pode ser menor que 0' });
  if (description === undefined) return res.status(400).json({ message: 'description é obrigatório' });
  if (typeof description !== 'string') return res.status(400).json({ message: 'description deve ser uma string' });
  if (description.length < 5) return res.status(400).json({ message: 'tamanho minimo do description deve ser 5' });
  if (pageNumber === undefined) return res.status(400).json({ message: 'pageNumber é obrigatorio' });
  if (typeof Number(pageNumber) !== 'number') return res.status(400).json({ message: 'pageNumber deve ser um numero' });
  if (Number(pageNumber) < 1) return res.status(400).json({ message: 'pageNumber deve ser maior que 1' });
  if (inStock === undefined) return res.status(400).json({ message: 'inStock é obrigatorio' });
  if (typeof inStock !== 'boolean') return res.status(400).json({ message: 'inStock deve ser um boolean' });
  if (imagePath === undefined) return res.status(400).json({ message: 'imagePath é obrigatorio' });
  if (typeof imagePath !== 'string') return res.status(400).json({ message: 'imagePath deve ser uma string' });
  if (imagePath.length < 10) return res.status(400).json({ message: 'o tamanho de imagePath deve ser maior que 10' });
  if (genre === undefined) return res.status(400).json({ message: 'genre deve ser informado' });
  if (typeof genre !== 'string') return res.status(400).json({ message: 'genre deve ser uma string' });
  if (genre.length < 3) return res.status(400).json({ message: 'genre deve ter mais que 3 caracteres' });
  if (authorId === undefined) return res.status(400).json({ message: 'authorId nao pode ser undefined' });
  if (typeof Number(authorId) !== 'number') return res.status(400).json({ message: 'authorId deve ser um numero' });
  if (Number(authorId) < 1) return res.status(400).json({ message: 'authorId deve ser maior que 0' });
  next();
};

module.exports = validateBookMiddleware;