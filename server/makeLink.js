var Link = require('./links/linkModel.js');

var link = new Link ({
    visits: 10,
    link: 'http://chrisakakidmillions.com',
    title: 'i make millions',
    code: 'asd34d',
    base_url: 'localhost:3000',
    url: 'http://theurl.com'
  });

link.save(function (err, newLink) {
  if (err) {
    return console.error('error saving test link');
  }
  console.log('test link saved:', newLink);
});




Link.find({visits: 10}, function(err, link) {
      if (err) {console.log(err)};
      console.log(link);
    });


