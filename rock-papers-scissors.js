        let scores = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        };


        updateScoreElement();


        let isAutoPlaying = false;
        let intervalId;

        function autoPlay(){
            if(!isAutoPlaying){
                intervalId = setInterval( function(){
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                    
            },1000)
            isAutoPlaying = true;
            }
            else{
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
        }


        document.querySelector('.js-rock-button').addEventListener("click", ()=>{ playGame('rock')});
        document.querySelector('.js-paper-button').addEventListener("click", ()=>{ playGame('paper')});
        document.querySelector('.js-scissor-button').addEventListener("click", ()=>{ playGame('scissors')});

        document.body.addEventListener("keydown", (event)=> {
            if(event.key === 'r'){
                playGame('rock');
            } else if(event.key === 'p'){
                playGame('paper');
            } else if(event.key === 's'){
                playGame('scissors');
            }
        })

        function playGame(playerMove){
            let result = '';
            const computerMove = pickComputerMove();
            
            if(playerMove ==='rock'){
                if(computerMove === 'rock'){
                    result = 'TIE';
                }

                else if(computerMove === 'scissors'){
                    result = 'YOU WIN';
                }

                else if (computerMove === 'paper'){
                    result = 'YOU LOSE';
                }
            }

            else if(playerMove === 'paper'){
                if(computerMove === 'rock'){
                    result = 'YOU WIN';
                }

                else if(computerMove === 'scissors'){
                    result = 'YOU LOSE';
                }

                else if (computerMove === 'paper'){
                    result = 'TIE';
                } 


            }

            else if(playerMove === 'scissors'){
            if(computerMove === 'rock'){
                    result = 'YOU LOSE';
                }

                else if(computerMove === 'scissors'){
                    result = 'TIE';
                }

                else if (computerMove === 'paper'){
                    result = 'YOU WIN';
                }    
            }
            

            if(result === 'YOU WIN'){
                scores.wins += 1;
            } else if( result=== 'YOU LOSE' ){
                scores.losses += 1;
            } else if( result === 'TIE'){
                scores.ties += 1;
            }
            

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `YOU <img src="images/${playerMove}-emoji.png" class='move-icon'>
            <img src="images/${computerMove}-emoji.png" class='move-icon'>
            COMPUTER MOVE`;

            updateScoreElement();

            localStorage.setItem('score',JSON.stringify(scores))

        }
        
        function updateScoreElement(){
            document.querySelector('.score-button').innerHTML = ` WINS:${scores.wins}, LOSSES:${scores.losses}, TIES:${scores.ties}`;
        }


        function pickComputerMove(){
            let pick = Math.ceil(Math.random()*10)
            let computerMove = '';

            if(pick >= 0 && pick <= 3){
                computerMove = 'rock';
            }

            else if(pick >= 4 && pick <= 7){
                computerMove = 'paper';
            }

            else if(pick >= 7 && pick <= 10){
                computerMove = 'scissors';
            }

            return computerMove;
        }
