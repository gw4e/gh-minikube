const getTableData = (req, res, db) => {
  db.select('*').from('testtable1')
    .then(items => {
        console.log("row successfuly read " + items.length)
      if(items.length){
          res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: err.toString()}))
}

const postTableData = (req, res, db) => {
  const { first, last, email, phone, location, hobby } = req.body;
  console.log( req.body)
  const added = new Date()
  db('testtable1').insert({first, last, email, phone, location, hobby, added})
    .returning('*')
    .then(item => {
        console.log("row successfuly inserted ");
        res.json(item);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({dbError: err.toString()})
    })
}

const putTableData = (req, res, db) => {
  const { id, first, last, email, phone, location, hobby } = req.body
  db('testtable1').where({id}).update({first, last, email, phone, location, hobby})
    .returning('*')
    .then(item => {
        console.log("row successfuly updated ");
        res.json(item);
    })
    .catch(err => res.status(400).json({dbError: err.toString()}))
}

const deleteTableData = (req, res, db) => {
  const { id } = req.body
  db('testtable1').where({id}).del()
    .then(() => {
        console.log("row successfuly deleted ")
        res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: err.toString()}))
}

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
}
