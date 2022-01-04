var researchTitles = [
    'What are the long-term effects of living in a technological world? Are these mostly negative or positive?',
    'Are children under 10 now growing up in a different world than college-age students did? How is it different, and what does that mean for them?',
    'What is the most important new technology for solving world problems?',
    'How has social media helped solve and create problems in countries outside the Philippines?',
    'Will governments like China and North Korea continue to be able to control citizens access to the Internet and social media?',
    'How do social media, texting, cell phones, and the Internet make the world bigger? Smaller?',
    'What are the implications of ever-increasing globalization through technology to the global economy?',
    'Technology is changing so quickly that we are frequently using computers, software programs, and other technologies that have frustrating glitches and problems. Is there a solution?',
    'How does our experience of social interactions with other humans influence the way we interact with machines?',
    'When does it become morally wrong to genetically engineer your child?',
    'How have COVID shutdowns, virtual school, and remote work changed our relationship to technology?',
    'How is online education going to change the way students learn?',
    'Does the Internet need controls or censorship? If so, what kind?',
    'Do digital tools make us more or less productive at work?',
    'To what extent is the development of new technologies having a negative effect?',
    'How will technology change our lives in twenty years?',
    'Should people get identity chips implanted under their skin?',
    'Should people in all countries have equal access to technological developments?',
    'Can video gaming help solve world problems?',
    'How are brains different from computers?',
    'Is organic food better for you than genetically modified foods?',
    'What are genetically modified food technologies able to do? How does this compare with traditional plant breeding methods?',
    'Should genetically modified food technologies be used to solve hunger issues?',
    'Since it is now possible to sequence human genes to find out about possible future heath risks, is that something everyone should have done? What are the advantages or disadvantages?',
    'If people have genetic testing, who has the right to that information? Should healthcare companies and employers have access to that information?',
    'If parents have genetic information about their children, when and how should they share it with the child?',
    'What sort of genetic information should parents seek about their children and how might this influence raising that child?',
    'Are self-driving cars a good or bad idea?',
    'How might travel in the future be different?',
    'Should information technologies and Internet availability make work from home the norm?'
]

function newTitle() {
	var randomTitles = Math.floor(Math.random() * (researchTitles.length));
	document.getElementById('answer').innerHTML = researchTitles[randomTitles];
	document.getElementById('answer').style.background = "#3BBA9C";
}