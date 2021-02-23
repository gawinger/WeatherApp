const errorHandler = (res, data1, data2) => {
  if (!data1) {
    location.reload(true);
  }
  if (data1.error === "error") {
    const errorData = data1;
    return res.render("error", { errorData });
  }
  if (data2) {
    if (data2.error === "error") {
      const errorData = data2;
      return res.render("error", { errorData });
    }
  }
};

module.exports = { errorHandler };
