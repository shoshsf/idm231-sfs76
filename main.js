function fade2Content() {
    document.body.classList.remove("blackScreen");
}

const displayObj = document.getElementById('display');

//Variables:
const candaceBtn = document.getElementById('Ari');
const marienneBtn = document.getElementById('Tau');
const loveBtn = document.getElementById('Gem');
const fortyBtn = document.getElementById('Can');
const sherryBtn = document.getElementById('Leo');
const peachBtn = document.getElementById('Vir');
const ethanBtn = document.getElementById('Lib');
const delilahBtn = document.getElementById('Sco');
const guinevereBtn = document.getElementById('Sag');
const joeBtn = document.getElementById('Cap');
const blytheBtn = document.getElementById('Aqu');
const caryBtn = document.getElementById('Pis');
/*
const AriBtn = document.getElementById('Ari2');
const TauBtn = document.getElementById('Tau2');
const GemBtn = document.getElementById('Gem2');
const CanBtn = document.getElementById('Can2');
const LeoBtn = document.getElementById('Leo2');
const VirBtn = document.getElementById('Vir2');
const LibBtn = document.getElementById('Lib2');
const ScoBtn = document.getElementById('Sco2');
const SagBtn = document.getElementById('Sag2');
const CapBtn = document.getElementById('Cap2');
const AquBtn = document.getElementById('Aqu2');
const PisBtn = document.getElementById('Pis2');

*/

//eventListeners:
candaceBtn.addEventListener('click', function() {
    userPicked('Ari');
});

marienneBtn.addEventListener('click', function() {
    userPicked('Tau');
});

loveBtn.addEventListener('click', function() {
    userPicked('Gem');
});

fortyBtn.addEventListener('click', function() {
    userPicked('Can');
});

sherryBtn.addEventListener('click', function() {
    userPicked('Leo');
});

peachBtn.addEventListener('click', function() {
    userPicked('Vir');
});

ethanBtn.addEventListener('click', function() {
    userPicked('Lib');
});

delilahBtn.addEventListener('click', function() {
    userPicked('Sco');
});

guinevereBtn.addEventListener('click', function() {
    userPicked('Sag');
});

joeBtn.addEventListener('click', function() {
    userPicked('Cap');
});

blytheBtn.addEventListener('click', function() {
    userPicked('Aqu');
});

caryBtn.addEventListener('click', function() {
    userPicked('Pis');

});
/*
AriBtn.addEventListener('click', function() {
    //console.log('Aries button clicked');
    userPicked('Ari2');
});
marienneBtn.addEventListener('click', function() {
    userPicked('Tau');
});

loveBtn.addEventListener('click', function() {
    userPicked('Gem');
});

fortyBtn.addEventListener('click', function() {
    userPicked('Can');
});

sherryBtn.addEventListener('click', function() {
    userPicked('Leo');
});

peachBtn.addEventListener('click', function() {
    userPicked('Vir');
});

ethanBtn.addEventListener('click', function() {
    userPicked('Lib');
});

delilahBtn.addEventListener('click', function() {
    userPicked('Sco');
});

guinevereBtn.addEventListener('click', function() {
    userPicked('Sag');
});

joeBtn.addEventListener('click', function() {
    userPicked('Cap');
});

blytheBtn.addEventListener('click', function() {
    userPicked('Aqu');
});

caryBtn.addEventListener('click', function() {
    userPicked('Pis');

});
*/


function userPicked(buttonName) {
    //console.log('User picked ' + buttonName);
    const zCharacter = document.getElementById('zCharacter');
    const zImage = document.getElementById('zImage');
    const zDescription = document.getElementById('zDescription');

    switch (buttonName) {
        case 'Ari':
            console.log(' was clicked');
             speakers.src = `sounds/candace.mp3`;
             speakers.play();
            zImage.src = 'img/candace_stone.png';
            zCharacter.innerHTML = "You are Candace Stone";
            zDescription.innerHTML = "Aries are known for their ambition and bravery, and Candace's plans to singlehandedly take down her serial killer ex-boyfriend shows those qualities. Aries are quick to fight back when they feel cornered, which Candace does, pulling a knife on Joe and even snapping at him when he has her tied up in a van. She is also self-assertive, refusing to take any gaslighting or victim shaming from anybody. Furthermore, before she meets Joe, she headlines a band that is named after the book Wuthering Heights, so she reflects the Aries' sense of creativity."
            modal.hidden = !modal.hidden;
        break;
        case 'Tau':
            console.log(' was clicked');
            speakers.src = `sounds/marienne.mp3`;
            speakers.play();
            zImage.src = 'img/marienne_bellamy.png';
            zCharacter.innerHTML = "You are Marienne Bellamy!";
            zDescription.innerHTML = "Joe's newest obsession reflects Taurus traits perfectly. As the manager of the library, Marienne has a Taurus-esque regalness about her. She works diligently and holds Joe, her employee, up to a high standard. This can often be viewed negatively, as Marienne, like a Taurus, can be stubborn and bull-headed, and is often very confrontational towards Joe. But once Joe gets to know her, she is caring, a good listener, and is clearly trying her best to be a dependable mother to her young daughter. Therefore, she shows all of the good qualities that Tauruses possess."
            modal.hidden = !modal.hidden;
        break;
        case 'Gem':
            console.log(' was clicked');
            speakers.src = `sounds/love.mp3`;
            speakers.play();
            zImage.src = 'img/love_quinn.png';
            zCharacter.innerHTML = "You are Love Quinn!";
            zDescription.innerHTML = "As a character most known for her impulsiveness and duplicity, Love, season three's biggest villain,  fits the Gemini description. She also fits the sign's nosiness, as she learns everything she can about Joe when she meets him, and then all of her neighbors when she arrives in Madre Linda, even breaking the law to find out information. But of course, Love has good traits as well. Her ability to switch at any time shows her great Gemini sense of adaptability. She is friendly and quick-witted, which is what draws Joe to her in the first place, and viewers can agree that there's never a boring moment with her."
            modal.hidden = !modal.hidden;
        break;
        case 'Can':
            console.log(' was clicked');
            speakers.src = `sounds/forty.mp3`;
            speakers.play();
            zImage.src = 'img/forty_quinn.png';
            zCharacter.innerHTML = "You are Forty Quinn";
            zDescription.innerHTML = "Love's brother Four shows many Cancer characteristics. He cares deeply about the people around him and is very intuitive to others' emotions, such as when he comforts Joe during his drug breakdown. He and his sister have a strong loyalty to one another, and he is fiercely protective over her, immediately turning on Joe when he senses danger. Unfortunately, he also portrays a lot of flaws that Cancers can have. He changes mood constantly, and is very overly sensitive, literally throwing himself out of a window when he receives some criticism on a screenplay. While Joe might often be annoyed by Four, audiences love how overtly Cancer-like he is."
            modal.hidden = !modal.hidden;
        break;
        case 'Leo':
            console.log(' was clicked');
            speakers.src = `sounds/sherry.mp3`;
            speakers.play();
            zImage.src = 'img/sherry_conrad.png';
            zCharacter.innerHTML = "You are Sherry Conrad!";
            zDescription.innerHTML = "Sherry is the leader of the Madre Linda moms, and is thus a Leo through and through. She exhibits drive in everything she does, as she's the only person in Joe's cage to escape by herself, despite nearly starving and bleeding to death. She is close with multiple people due to having an open marriage with her husband, and therefore craves connection in the way that Leos do. Sherry can definitely be self-centered and self-serving, as Leos often like to be the center of attention. But she still manages to give up her time and energy to help others, showing the Leo's sense of generosity."
            modal.hidden = !modal.hidden;
        break;
        case 'Vir':
            console.log(' was clicked');
            speakers.src = `sounds/peach.mp3`;
            speakers.play();
            zImage.src = 'img/peach_salinger.png';
            zCharacter.innerHTML = "You are Peach Salinger!";
            zDescription.innerHTML = "As a character most known for her impulsiveness and duplicity, Love, season three's biggest villain,  fits the Gemini description. She also fits the sign's nosiness, as she learns everything she can about Joe when she meets him, and then all of her neighbors when she arrives in Madre Linda, even breaking the law to find out information. But of course, Love has good traits as well. Her ability to switch at any time shows her great Gemini sense of adaptability. She is friendly and quick-witted, which is what draws Joe to her in the first place, and viewers can agree that there's never a boring moment with her."
            modal.hidden = !modal.hidden;
        break;
        case 'Lib':
             console.log(' was clicked');
            speakers.src = `sounds/ethan.mp3`;
            speakers.play();
            zImage.src = 'img/ethan_russell.png';
            zCharacter.innerHTML = "You are Ethan Russell!";
            zDescription.innerHTML = "Libras are cosy and friendly people, and Ethan, a book store clerk, represents the warmth that Mooney's bookstore provides (minus the scary basement, of course). As Libra is represented by the scales, typical characteristics include a concern with attaining balance and harmony. Ethan showcases this, as when Beck proves to be a terrible employee at the bookstore, Ethan tries to let Joe know about this in the most peaceful way possible, as to avoid conflict. Furthermore, he is always looking for a loving connection, and is one of the show's few characters who end up in a happy relationship."
            modal.hidden = !modal.hidden;
        break;
        case 'Sco':
            console.log(' was clicked');
            speakers.src = `sounds/delilah.mp3`;
            speakers.play();
            zImage.src = 'img/delilah_alves.png';
            zCharacter.innerHTML = "You are Delilah Alves!";
            zDescription.innerHTML = "Delilah is a reflection of the Scorpio's intelligence and morbid curiosity. She is an investigative journalist who is persistent in taking down awful people, and is referred to as 'the smartest girl in the room'. She is strategic in her work, even managing to convince Joe to let her out of his glass cage, which is actually a change from the book. Like Scorpios, she is tough and has built walls around herself. But she is also passionate about doing the right thing and providing a good life for her sister Ellie, which also reflects the Scorpio."
            modal.hidden = !modal.hidden;
        break;
        case 'Sag':
            console.log(' was clicked');
            speakers.src = `sounds/beck.mp3`;
            speakers.play();
            zImage.src = 'img/guinevere_beck.png';
            zCharacter.innerHTML = "You are Guinevere Beck!";
            zDescription.innerHTML = " Beck is the only character to have a canonical zodiac sign, which is Sagittarius. According to her friend Lynn, her sign means that she 'craves attention,' which is symbolized by the noisy bracelets on her wrist, a factor that Joe also notices. But Beck also has a sense of independence, although this often manifests as her feeling like she doesn't belong anywhere. Furthermore, Sagittariuses tend to resist constraints, which is actually a flaw of Beck's. She often sabotages any security that she has, like when she cheats on Joe after their relationship has taken off."
            modal.hidden = !modal.hidden;
        break;  
        case 'Cap':
            console.log(' was clicked');
            speakers.src = `sounds/joe.mp3`;
            speakers.play();
            zImage.src = 'img/joe_goldberg.png';
            zCharacter.innerHTML = "You are Joe Goldberg";
            zDescription.innerHTML = " Capricorns can be judgemental and pessimistic towards others, which pretty much embodies Joe in all of his awful yet likeable monologue-ridden glory. Capricorns are also persistent, which again summarises Joe's tendency to become obsessed with every girl he meets. Due to his rough childhood, Joe has worked himself up from basically nothing, reflecting the Capricorn trait of hard discipline. He is also practical, tending to enjoy the simple pleasures in life. His practicality also presents itself in what is considered to be a skill of Capricorns, DIY. Judging by how resourceful he is in building his own cages and getting rid of bodies, he is definitely talented in that regard."
            modal.hidden = !modal.hidden;
        break;
        case 'Aqu':
            console.log(' was clicked');
            speakers.src = `sounds/blythe.mp3`;
            speakers.play();
            zImage.src = 'img/blythe.png';
            zCharacter.innerHTML = "You are Blythe!";
            zDescription.innerHTML = "Aquarius people are creative and clever, which most matches Blythe, a talented writer and Beck's idol and classmate from season one. She is eclectic in the way that she dresses and speaks to other people. Some characters like Peach look down on her for it, calling her pretentious, but by embodying Aquarians' resistance to classification, Blythe doesn't mind standing out. In fact, she states that her worst fear is being considered unremarkable. Like Aquarians, she is enthusiastic and active, as she moves forward in her relationship with Ethan incredibly fast. And considering that Libra and Aquarius are compatible signs, they are destined to stay together."
            modal.hidden = !modal.hidden;
        break;
        case 'Pis':
            console.log(' was clicked');
            speakers.src = `sounds/cary.mp3`;
            speakers.play();
            zImage.src = 'img/cary_conrad.png';
            console.log('pis case happened');
            zCharacter.innerHTML = "You are Cary Conrad!";
            zDescription.innerHTML = "Cary is emotionally aware and responsive, just like a Pisces. He takes the other men of Madre Linda on wilderness trips with him so they can all explore their masculinity and cry together. Pisces are also creative and imaginative, which Cary shows through the lengths that he will go to to create an atmosphere of savagery on these trips, even preventing Joe from eating any food that he doesn't hunt. He is gracious and quick to forgive (especially in comparison to his wife) which makes sense as Pisces are the most sympathetic of the zodiac signs. Even when he is fighting Joe to the death, he doesn't seem that angry."
            modal.hidden = !modal.hidden;
        break;      
        
        default:
            console.log('A button was clicked!');
    }

}

//
// Calendar input code
//

const userSubmitBtn = document.getElementById('userSubmit');

// add Event Listener
userSubmitBtn.addEventListener('click', function() {
    //console.log('Submit button clicked!');

    const usersFirstName = document.getElementById('name').value;
    //console.log('Users name is: ' + usersFirstName);

    const userBday = new Date(document.getElementById('bday').value);
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth() + 1;
    //console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    //console.log(`Users birth day is: ${whichDayOfMonth}`);

    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
    }

    console.log(AstroSign);
    userPicked(AstroSign);
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('btn-modal-close');
modalCloseBtn.addEventListener('click', function() {
    console.log('modal close clicked!');
    modal.hidden = !modal.hidden;
});

//Audio 
const soundButtons = document.querySelectorAll('.soundtrack');
//const soundStopButton = document.getElementById('btn-stop-sounds');
const speakers = document.getElementById('speakers');

soundButtons.forEach(button => {
  const sound = button.dataset.sound;
  button.addEventListener('click', () => {
    speakers.src = `sounds/${sound}.mp3`;
    speakers.play();
  });
});

soundStopButton.addEventListener('click', () => {
  speakers.pause();
});
//--------------------------