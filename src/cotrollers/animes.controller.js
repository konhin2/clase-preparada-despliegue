const Anime = require('./../models/Anime')

const getAnimes = async (req, res) => {
    const animes = await Anime.find({})
    res.render('allAnimes', {animes})
}

module.exports = { getAnimes }