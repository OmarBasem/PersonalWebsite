(function () {
    const images = document.getElementsByClassName('photograph')
    const lightbox = document.getElementById('lightbox');
    const close = document.getElementById('close');
    const right = document.getElementById('right');
    const left = document.getElementById('left');
    const navContainer = document.getElementById('navContainer');
    const container = document.getElementById('horizontalContainer');
    const linkedinContainer = document.getElementById('linkedinContainer');
    const linkedinIcon = document.getElementById('linkedinIcon');
    const linkedinText = document.getElementById('linkedinText');
    const githubContainer = document.getElementById('githubContainer');
    const githubIcon = document.getElementById('githubIcon');
    const githubText = document.getElementById('githubText');
    const emailContainer = document.getElementById('emailContainer');
    const emailIcon = document.getElementById('emailIcon');
    const emailText = document.getElementById('emailText');
    const phoneContainer = document.getElementById('phoneContainer');
    const phoneIcon = document.getElementById('phoneIcon');
    const phoneText = document.getElementById('phoneText');
    const seeMore = document.getElementById('seeMore')
    const moreProjects = document.getElementById('moreProjects');

    const section1Height = document.getElementById('profile').offsetHeight
    const section2Height = document.getElementById('highlights').offsetHeight
    const section3Height = document.getElementById('projects').offsetHeight
    const section4Height = document.getElementById('skills').offsetHeight
    const section5Height = document.getElementById('awayFromCS').offsetHeight
    const section6Height = document.getElementById('photography').offsetHeight

    const x = window.innerHeight * 0.2
    const s0 = screen.width > 1100 ? window.innerHeight : document.getElementsByTagName('header')[0].offsetHeight
    const s1 = s0 + section1Height
    const s2 = s1 + section2Height
    const s3 = s2 + section3Height
    const s4 = s3 + section4Height
    const s5 = s4 + section5Height
    const s6 = s5 + section6Height

    // document.getElementsByClassName('projectsSection')[0].style.maxHeight = '1000px'
    if (screen.width <= 1100) {
        document.getElementsByTagName('header')[0].style.height = `${1744 / window.innerHeight * 100}%`
        document.getElementById('projectsMenu').innerText = 'Projects'
    }

    if (screen.width > 1100)
        setTimeout(() => {
            document.getElementsByTagName('footer')[0].style.display = 'block'
            // let height = 760 / 0.565 * (window.innerHeight / window.innerWidth);
            // let height = (window.innerHeight/window.innerWidth) * 1345
            // document.getElementsByTagName('footer')[0].style.height = `${height}px`
        }, 5000)

    let currentTranslation = 0;


    if (screen.width > 1000) {
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('click', e => {
                lightbox.style.display = 'block'
                currentTranslation = -i * 100;
                container.style.transform = `translateX(${currentTranslation}vw)`
                if (currentTranslation < 0)
                    left.style.opacity = 1
                if (currentTranslation > -800)
                    right.style.opacity = 1
                setTimeout(() => lightbox.style.opacity = 1, 1)
            })
        }

    }

    close.addEventListener('click', e => {
        lightbox.style.opacity = 0;
        setTimeout(() => lightbox.style.display = 'none', 300)
    })

    right.addEventListener('click', () => {
        if (currentTranslation > -800) {
            currentTranslation -= 100
            container.style.transform = `translateX(${currentTranslation}vw)`
            if (currentTranslation < 0)
                left.style.opacity = 1
            else
                left.style.opacity = 0
            if (currentTranslation > -800)
                right.style.opacity = 1
            else
                right.style.opacity = 0
        }

    })

    left.addEventListener('click', () => {
        if (currentTranslation < 0) {
            currentTranslation += 100
            container.style.transform = `translateX(${currentTranslation}vw)`
            if (currentTranslation > -800)
                right.style.opacity = 1
            else
                right.style.opacity = 0
            if (currentTranslation < 0)
                left.style.opacity = 1
            else
                left.style.opacity = 0
        }

    })

    linkedinContainer.addEventListener('mouseenter', () => {
        linkedinIcon.style.backgroundColor = '#ffffff'
        linkedinText.style.color = '#ffffff'
    })

    linkedinContainer.addEventListener('mouseleave', () => {
        linkedinIcon.style.backgroundColor = '#7F7F90'
        linkedinText.style.color = '#7F7F90'
    })

    githubContainer.addEventListener('mouseenter', () => {
        githubIcon.style.backgroundColor = '#ffffff'
        githubText.style.color = '#ffffff'
    })

    githubContainer.addEventListener('mouseleave', () => {
        githubIcon.style.backgroundColor = '#7F7F90'
        githubText.style.color = '#7F7F90'
    })

    emailContainer.addEventListener('mouseenter', () => {
        emailIcon.style.backgroundColor = '#ffffff'
        emailText.style.color = '#ffffff'
    })

    emailContainer.addEventListener('mouseleave', () => {
        emailIcon.style.backgroundColor = '#7F7F90'
        emailText.style.color = '#7F7F90'
    })

    phoneContainer.addEventListener('mouseenter', () => {
        phoneIcon.style.backgroundColor = '#ffffff'
        phoneText.style.color = '#ffffff'
    })

    phoneContainer.addEventListener('mouseleave', () => {
        phoneIcon.style.backgroundColor = '#7F7F90'
        phoneText.style.color = '#7F7F90'
    })

    const setActive = (node) => {
        if (screen.width <= 1100 && node > 5)
            node = 11
        const children = navContainer.childNodes
        for (let i = 0; i < children.length; i++) {
            if (i % 2 !== 0)
                i === node ? children[i].style.background = '#20948D' : children[i].style.background = '#222222'
        }
    }


    window.onscroll = (e) => {


        const y = this.scrollY

        if (screen.width > 1100)
            navContainer.style.opacity = y / window.innerHeight;
        if (y > (s6 - x))
            setActive(13)
        else if (y > (s5 - x))
            setActive(11)
        else if (y > (s4 - x))
            setActive(9)
        else if (y > (s3 - x))
            setActive(7)
        else if (y > (s2 - x))
            setActive(5)
        else if (y > (s1 - x))
            setActive(3)
        else if (y > (s0 - x))
            setActive(1)
        if (screen.width <= 1100) {
            if (y >= s0)
                navContainer.style.position = 'fixed'
            else
                navContainer.style.position = 'relative'
        }
    }

    document.getElementById('seeMore').onclick = e => {
        moreProjects.style.display = 'block'
        moreProjects.style.maxHeight = '10000px'
        seeMore.style.display = 'none'
        // document.getElementById('projects').style.maxHeight = '10000px'
    }


})();