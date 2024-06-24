const journey=document.getElementById('journeyContent');
        const notificationSquare=document.getElementById('notificationSquare');
        const notice=document.getElementById('noticeContent');
        const introduction = document.getElementById('introduction');
        const introductionContent = document.getElementById('introductionContent');
        const threadA = document.getElementById('threadA');
        const threadAContent = document.getElementById('threadAContent');
        journey.addEventListener('click',()=>{
            journey.classList.toggle("right-[22rem]");
        })
        journey.addEventListener('click',()=>{
            if(journey.classList.contains("right-[22rem]")) {
            notificationSquare.style.display="block";
        } else {
            notificationSquare.style.display="none";
        }
        }) 
        notice.addEventListener('click',()=>{
            notice.classList.toggle("left-[10rem]");
        })
        introduction.addEventListener('click', () => {
            if (introductionContent.style.height === '0px') {
                introductionContent.style.height = introductionContent.scrollHeight + 'px';
            } else {
                introductionContent.style.height = '0px';
            }
        });

        threadA.addEventListener('click', () => {
            if (threadAContent.style.height === '0px') {
                threadAContent.style.height = threadAContent.scrollHeight + 'px';
            } else {
                threadAContent.style.height = '0px';
            }
        });