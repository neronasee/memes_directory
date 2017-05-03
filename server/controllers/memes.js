const Mem = require('../models/mem.js');

exports.postMem = (req, res, next) => {
	const { title, description, img } = req.body;
	console.log(req.body)
	if(!title) {
		return res.status(422).send({error: "Provide title and image path"});
	}

	const mem = new Mem({
		title,
		description,
		img
	});
	mem.save(err => {
		if(err) return next(err);

		res.send({message: "mem saved"});
	})
}

exports.getMems = (req, res, next) => {
	Mem.find({}, null, {sort: { postDate: 1 }}, (err, result) => {
		if(err) return next(err);

		res.json(result);
	})
}

exports.getMeme = (req, res, next) => {
	const { id } = req.params;
	Mem.findById(id, (err, mem) => {
		if(err) return next(err);

		res.json({mem})
	})
}
