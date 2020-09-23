let jsonwebtoken = require('jsonwebtoken');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const {check, validationResult} = require('express-validator')

module.exports = {
// ==============================================================================
//************ Attach Accessory Route Method ************\\
// ==============================================================================
    route: (req, res) => {
        let id = req.params.id;
        // console.log(id);
        Cube.findById(req.params.id).populate('accessories').lean().then(cube => {
            Accessory.find({}).where('_id').nin(cube.accessories).lean().then(accessories => {
                res.render('attachAccessory', {
                    title: "Create Accessory Page",
                    cube: cube,
                    accessories: accessories,
                    accessoriesLength: (accessories.length > 0),
                });
            });
        });
    },
// ==============================================================================
//************ Attach Accessory Data Method ************\\
// ==============================================================================
    data: (req, res) => {
        let formData = req.body;
        // console.log(formData);
        let id = req.params.id;
        let pushData = req.body.accessory;

        check('accessory').notEmpty().isString().trim();
        const err = validationResult(req);

        if(!err.isEmpty()){
            console.log('failed to attach');
            res.status(422);
        } else {
            Cube.findById(id)
                .then((cube) => {
                    cube.accessories.push(pushData);
                    cube.save().then(() => {
                        Accessory.findById(pushData).then((accessory) => {
                            accessory.cubes.push(id);
                            accessory.save(
                                res.redirect('/details/' +id)
                            );
                        });
                    });
                });
        }
    }
};

//*************** Function to validate our incoming form img url string ***************//
/* 
function validURL(str) {
    var pattern = /​((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i;
    console.log(pattern.test(str));
    return !!pattern.test(str);
}
*/
  // cube.save().then(() => {
  //     Accessory.findById(req.body.accessory).then((accessory)=> {
  //         accessory.cubes.push(req.params.cubeId);
  //         accessory.save();
  //         res.redirect('/detains/' + req.params.cubeId);
  //     });

   // console.log(accessory);
   // Cube.findByIdAndUpdate({_id: id}, {
   //     accessories: accessory, 
   //     accessory:(accessory.length > 0),
   //     useFindAndModify: true,
   //     unique: true,
   //     safe: true,
   //     new: true

   // }).populate({path:'accessories'}).then((response) => {
   //     console.log(response);
   //     // console.log(response.accessories[0].name);
   //     let accessory = response.accessories;
   //     // accessory += accessory[0];
   //     console.log(accessory);
   //     // console.log(Cube.accessories[0]);

   // }).then();

     // console.log(req.params.id);
    //  let id = req.params.id;
    //  console.log(id);
    //  // let name = req.params;
    //  Cube.findOneById(id).populate('accessories').catch(err => {
    //      console.log(err);
    //  }).then((cube) => {
    //      // cube.accessory.push(req.body.accessory);
    //      console.log(cube);

    //      Accessory.findOne(formData).populate({
    //              path: 'cubes'
    //          })
    //          .then(accessory => {

    //              console.log(accessory);
    //          });

    //      res.status(200);
    //      res.redirect("/");
    //  });
     // else {
     // new Accessory(formData)
     //     .save().then((accessory) => {
     //         console.log(accessory);
     //         res.redirect('/');
     //     }).catch(err => {
     //         if (err) {
     //             console.log(err._message);
     //             return;
     //         }
     //     });
     // }

// Cube.findById(id).lean().catch(err => console.error(err))
//     .then(cube => {
//         // console.log(cube);
//         Accessory.find({}).lean()
//         .catch(err => console.error(err))
//         .then(accessories => {
//             res.status(200);
//             res.render('attachAccessory', {
//                 layout: 'main',
//                 title: 'Attach Accessory',
//                 accessories: accessories,
//                 cube: cube,
//                 id: id
//             });
//         });
//     }
// );