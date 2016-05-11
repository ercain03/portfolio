$(document).ready(function() {
  $('.hamburger-icon').click(function() {
    $('.hamburger-menu').toggleClass('expand');
  });
});

var appendProjects = [];

var allProjects = [{
  title: 'About Me',
  projectUrl: 'https://github.com/ercain03/about-me',
  publishedOn: 'April 19, 2016',
  imageUrl: '<img src="images/Wolverine.png"></img>',
  body: '<p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>'
}];

function Project(obj) {
  this.title = obj.title;
  this.publishedOn = obj.publishedOn;
  this.imageUrl = obj.imageUrl;
  this.projectUrl = obj.projectUrl;
  this.body = obj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('.project-link').attr('href', this.projectUrl);
  $newProject.find('.project-link').html(this.title);
  $newProject.find('.publish-date').html(this.publishedOn);
  $newProject.find('.article-image').html(this.imageUrl);
  $newProject.find('.article-body').html(this.body);

  return $newProject;
};

allProjects.forEach(function(obj) {
  appendProjects.push(new Project(obj));
});

appendProjects.forEach(function(obj) {
  $('#articles').append(obj.toHtml());
});
