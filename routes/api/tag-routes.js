const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag_data = await Tag.findAll({
      include: [{model : Product}]
    });
    res.status(200).json(tag_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag_data = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if (tag_data) {
      res.status(200).json(tag_data);
    } else {
      res.status(404).json({message : 'No tag with the given ID was found!'});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    /* req.body should look like this...
    {
      tag_name: "XXXX",
    }
    */
    const tag_data = await Tag.create(req.body);
    res.status(201).json(tag_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag_data = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (tag_data[0] !== 0) {
      const updated_tag = Tag.findByPk(req.params.id,{
        include: [{model: Product}]
      });
      const message = 'Tag successfully updated.';
      res.status(200).json({message:message,updated_tag:updated_tag});
    } else {
      res.status(404).json({message: 'No tag with the given ID was found!'});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag_data = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (tag_data) {
      res.status(200).json(tag_data);
    } else {
      res.status(404).json({message: 'No tag with the given ID was found!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
