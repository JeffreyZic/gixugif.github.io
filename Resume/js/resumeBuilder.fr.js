var bio = {
    'name': 'Jeff',
    'role': 'Administrateur réseau',
    'contacts': {
        'mobile': '+1 845.309.7576',
        'email': 'zic.jeffrey@gmail.com',
        'github': 'https://github.com/JeffreyZic',
        'twitter': 'https://twitter.com/gixugif',
        'location': 'Red Hook, NY'
    },
    'welcomeMessage': 'Salut, bienvenue chez mon CV!',
    'skills': [{
        'value': 3,
        'color': "#00cc00",
        'highlight': "#00ff00",
        'label': 'python 3.x'
    }, {
        'value': 2,
        'color': "#663300",
        'highlight': "#996600",
        'label': 'javascript'
    }, {
        'value': 3,
        'color': "#3366ff",
        'highlight': "#6699ff",
        'label': 'HTML5'
    }, {
        'value': 3,
        'color': "#ffff00",
        'highlight': "#ffff99",
        'label': 'CSS'
    }, {
        'value': 2,
        'color': "#F7464A",
        'highlight': "#FF5A5E",
        'label': 'developpment front'
    }, {
        'value': 2,
        'color': "#7D1662",
        'highlight': "#902D76",
        'label': 'Git/ GitHub'
    }, {
        'value': 2,
        'color': "#04C991",
        'highlight': "#00FFB7",
        'label': 'Bootstrap'
    }, {
        'value': 2,
        'color': "#000",
        'highlight': "#484848",
        'label': 'jQuery'
    }, {
        'value': 2,
        'color': "#2e5d03",
        'highlight': "#428603",
        'label': 'Knockout'
    }, {
        'value': 2,
        'color': "#a45100",
        'highlight': "#d16700",
        'label': 'Jasmine'
    }, {
        'value': 1,
        'color': '#cc00ff',
        'highlight': '#ff00ff',
        'label': 'Digital Ocean'
    }],
    'biopic': './img/me-600_small.jpg',
    'polarChart': function(data) {
        var ctx = $(".skills-chart").get(0).getContext('2d');
        var myNewChart = new Chart(ctx);
        new Chart(ctx).PolarArea(data, {
            responsive: true
        });
    },
    'display': function() {
        var $about = $('.about-me');
        var $contacts = $('.topContacts');
        var $footer = $('.footer-contacts');
        var $graphTitle = $('.skills-h3');

        $about.prepend(HTMLheaderRole.replace('%data%', bio.role))
        .prepend(HTMLheaderName.replace('%data%', bio.name));

        $contacts.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile))
        .append(HTMLemail.replace(/%data%/gi, bio.contacts.email))
        .append(HTMLgithub.replace(/%data%/gi, bio.contacts.github))
        .append(HTMLlocation.replace('%data%', bio.contacts.location));

        $footer.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile))
        .append(HTMLemail.replace(/%data%/gi, bio.contacts.email))
        .append(HTMLgithub.replace(/%data%/gi, bio.contacts.github))
        .append(HTMLlocation.replace('%data%', bio.contacts.location));

        $('.bio').append(HTMLbioPic.replace('%data%', bio.biopic));

        if (bio.skills.length > 0) {
            $('.bio').append(HTMLskillsStart.replace(/%title%/gi, 'Compétences'));

            bio.skills.forEach(function(skill) {
                $('.skills').append(HTMLskills.replace('%data%', skill.label));

            });
            $('.bio').append(HTMLskillsChart);
            bio.polarChart(bio.skills);
        }
    }
};

var education = {
    'schools': [{
        'name': 'Hofstra',
        'location': 'Hempstead, NY',
        'degree': "l'informatique",
        'majors': ['Comp. Sci'],
        'dates': 'Septembre 2008 - Mais 2010 (auditeur libre)',
        'url': 'http://www.hofstra.edu/home/'

    }],
    'onlineCourses': [{
        'title': 'Frontend Development Nanodegree',
        'school': 'Udacity',
        'date': 2016,
        'url': 'https://www.udacity.com/'
    }, {
        'title': 'Developpement web',
        'school': 'Udacity',
        'date': 2012,
        'url': 'https://www.udacity.com/'
    }],
    'display': function() {

        education.schools.forEach(function(school) {

            $('.education').append(HTMLschoolStart);

            var newHTMLschoolName = HTMLschoolName;
            newHTMLschoolName = newHTMLschoolName.replace('#', school.url);
            newHTMLschoolName = newHTMLschoolName.replace('%data%', school.name);

            $('.education-entry:last').append(newHTMLschoolName);
            $('.school').append(HTMLschoolDegree.replace('%data%', school.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors));
        });

        $('.online').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(onlineCourse) {
            $('.online').append(HTMLonlineStart);

            var newHTMLonlineTitle = HTMLonlineTitle.replace('#', "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001");
            newHTMLonlineTitle = newHTMLonlineTitle.replace('%data%', onlineCourse.title);

            $('.online-entry:last').append(newHTMLonlineTitle);

            $('.online-school:last').append(HTMLonlineSchool.replace('%data%', onlineCourse.school));
            $('.online-entry:last').append(HTMLonlineDates.replace('%data%', onlineCourse.date));

            var newHTMLonlineURL = HTMLonlineURL;

            newHTMLonlineURL = newHTMLonlineURL.replace('#', onlineCourse.url);
            newHTMLonlineURL = newHTMLonlineURL.replace('%data%', onlineCourse.url);

            $('.online-entry:last').append(newHTMLonlineURL);
        });
    }
};

var work = {
    'jobs': [{
        'employer': 'Rhinebeck Animal Hospital',
        'title': 'Administrateur Réseau',
        'location': 'Rhinebeck, NY',
        'dates': 'Depuis juillet 2012',
        'description': '<ul><li>Support technique à une équipe de 30 employées, avec 30 téléphones VoIP et 20 ordinateurs.</li>' +
                       '<li>Amélioration de la documentation de mis en place et utilisation des systèmes pour améliorer la clarté et l’efficacité.</li>' +
                       '<li>Amélioration de le fiabilité et l’efficacité de le sauvegarder automatique et les scriptes pour contrôler.</li>' +
                       '<li>Recherche et test des nouvelles technologies et réaliser le plus efficace.</li></ul>'
    }],
    'display': function() {

        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                $('.workExperience').append(HTMLworkStart);
                var formatEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
                var formatTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
                var formatLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
                var formatDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
                var formatDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
                $('.work-entry:last').append(formatEmployer + formatTitle,
                                            formatLocation,
                                            formatDates,
                                            formatDescription);
            }
        }
    }
};


var projects = {
    'project': [{
        'title': 'Feed Reader',
        'url': 'https://github.com/JeffreyZic/frontend-nanodegree-feedreader',
        'dates': 'Mais 2016',
        'description':  '<ul><li>Construction de tests en utilisant le framework Jasmine</li>' +
                        '<li>Utilisation de tests asynchrone</li></ul>',
        'images': ['./img/feedReader-600_small.jpg 600w', './img/feedReader-1000_medium.jpg 1000w', './img/feedReader-1600_large.jpg 1600w']
    }, {
        'title': 'Carte de quartier',
        'url': 'https://github.com/JeffreyZic/neighborhood-map',
        'dates': 'Mais 2016',
        'description': "<ul><li>Construction d'application web en utilisant le Google Maps et API Yelp search</li>" +
                        "<li>Utilisation  d'appells asynchrones à APIs 3eme partie</li>" +
                        "<li>Responsive, practique  experience de l'user</li></ul>",
        'images': ['./img/neighborhood-600_small.jpg 600w', './img/neighborhood-1000_medium.jpg 1000w', './img/neighborhood-1600_large.jpg 1600w']
    }, {
        'title': 'Space Invaders',
        'url': 'https://github.com/JeffreyZic/Space-Invaders',
        'dates': 'Janvier 2016',
        'description':  '<ul><li>Construition de sans bug, objet-orientée jeux en canvas HTML5</li></ul>',
        'images': ['./img/galaga-600_small.jpg 600w', './img/galaga-1000_medium.jpg 1000w', './img/galaga-1600_large.jpg 1600w']
    }, {
        'title': 'Call Detail Recording',
        'url': 'https://github.com/JeffreyZic/CDRecording',
        'dates': 'Nov 2015',
        'description': "<ul><li>Construction d'un script extensible en utilisant Python 3.x</li>" +
                        '<li>Analyse rapidement 10,000s de metadonnées de appells téléphones</li></ul>',
        'images': ['./img/cdr-600_small.jpg 600w', './img/cdr-1000_medium.jpg 1000w', './img/cdr-1600_large.jpg 1600w']
    }],
    'display': function() {
        projects.project.forEach(function(proj) {
            $('.projects').append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace('%titleData%', proj.title);
            projectTitle = projectTitle.replace('%urlData%', proj.url);
            $('.project-entry:last').append(projectTitle);
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%',proj.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', proj.description));
            imgSrcStr = HTMLprojectImage.replace('%srcSetData%', proj.images.join(','));
            imgSrcStr = imgSrcStr.replace('%srcData%',proj.images[0]);
            imgSrcStr = imgSrcStr.replace('%altData%', proj.title);
            $('.project-entry:last').append(imgSrcStr);
        });
    }
};

bio.display();
education.display();
work.display();
projects.display();
$('.mapDiv').append(googleMap);
