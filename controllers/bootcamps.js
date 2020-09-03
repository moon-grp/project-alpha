//@desc      get all bootcamps
//@route    GET /api/v1/bootcamps
//@acces    Public
exports.getBootcamps = (res, req, next) => {
  res
  .status(200)
  .json({success: true, msg: "show all bootcamps",
  });
};

//@desc      get  bootcamp
//@route    GET /api/v1/bootcamps/:id
//@acces    Public
exports.getBootcamp = (res, req, next) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp ${req.params.id}`,
  });
};

//@desc      create  bootcamp
//@route    POST /api/v1/bootcamps
//@acces    Private
exports.createBootcamp = (res, req, next) => {
  res.status(200).json({
    success: true,
    msg: "Create new bootcamps",
  });
};

//@desc      Update  bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@acces    Private
exports.updateBootcamp = (res, req, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

//@desc      delete  bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@acces    Private
exports.deleteBootcamp = (res, req, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};
