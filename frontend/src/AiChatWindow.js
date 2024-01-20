import React, { useState, useEffect, useRef } from 'react';

const ChatInterface = () => {
    const [state, setState] = useState({
        i: 0,
        lvl: 0,
        score: 0,
        sub: '',
        qn: 0,
        data: []
    });
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesContainerRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputValue.trim() !== '') {
            const response = await getAiResponse(inputValue);

            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'user', message: inputValue },
                { sender: 'ai', message: response },
            ]);

            setInputValue('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleResponse = async (prompt) => {
        const { i } = state;
        const lowercasePrompt = prompt.toLowerCase();
        if ((lowercasePrompt.includes('hello') || lowercasePrompt.includes('hi') || lowercasePrompt.includes('hey') || lowercasePrompt.includes('hola') || lowercasePrompt.includes('sup') || lowercasePrompt.includes('yo') || lowercasePrompt.includes('wassup')) && i === 0) {
            setState({ ...state, i: 1 });
            return "Hey there young nigga! Would you like to take a test?";
        }
        else if (i === 0) {
            setState({ ...state, i: 1 });
            console.log(i);
            return "Hello! Would you like to take a test?";
        }
        else if ((lowercasePrompt.includes('yes') || lowercasePrompt.includes('sure') || lowercasePrompt.includes('ok') || lowercasePrompt.includes('okay') || lowercasePrompt.includes('yeah') || lowercasePrompt.includes('yep') || lowercasePrompt.includes('yup') || lowercasePrompt.includes('yea')) && i === 1) {
            setState({ ...state, i: 2 });
            return "Here are the rules:<br>1. You will be given a series of questions.<br>2. You will have 3 subjects to choose from.<br>3. You will be given 4 options to choose from.<br>4. You will have to type the corresponding alphabet (A, B, C, or D) of the option you choose.<br>5. You will be given a score at the end of the test.<br>6. You can select the difficulty of your test based on the following parameters:<br>&nbsp;&nbsp;&nbsp;&nbsp;i) Primary School (Classes 1 to 5) - Level 1<br>&nbsp;&nbsp;&nbsp;&nbsp;ii) Middle School (Classes 6 to 8) - Level 2<br>&nbsp;&nbsp;&nbsp;&nbsp;iii) High School (Classes 9 to 10) - Level 3<br>&nbsp;&nbsp;&nbsp;&nbsp;iv) Higher Secondary School (Classes 11 to 12) - Level 4<br>7. You will be given a chance to view the leaderboard.<br>8. For every correct answer, you will be awarded 2 points.<br>9. For every wrong answer, you will be awarded 0 points.<br>10. For every question you skip, you will be awarded 0 points.<br>11. If you score higher than a secret cutoff (wink wink), you will be given a surprise gift.<br><br>Are you ready?";
        }
        else {
            setState({ ...state, i: 0 });
            return "I'm sorry, I don't understand. Let us start over, shall we! Would you like to take a test?";
        }
    };


    const getAiResponse = async (prompt) => {
        const { i, lvl, sub, data, qn, score } = state;
        const lowercasePrompt = prompt.toLowerCase();
        if (i < 2) {
            return handleResponse(prompt);
        }
        if ((lowercasePrompt.includes('yes') || lowercasePrompt.includes('sure') || lowercasePrompt.includes('ok') || lowercasePrompt.includes('okay') || lowercasePrompt.includes('yeah') || lowercasePrompt.includes('yep') || lowercasePrompt.includes('yup') || lowercasePrompt.includes('yea')) && i === 2) {
            setState({ ...state, i: 3 });
            return "Great! Let's begin. What difficulty level would you like to choose?";
        }
        if (prompt.toLowerCase().includes('no') && i === 2) {
            setState({ ...state, i: 0 });
            return "Okay, see you later!";
        }
        if ((prompt.toLowerCase().includes('1') || prompt.toLowerCase().includes('one')) && i === 3) {
            setState({ ...state, i: 4, lvl: 1 });
            return "You have chosen Level 1. What subject would you like to choose? (Maths, Science, English)";
        }
        if ((prompt.toLowerCase().includes('2') || prompt.toLowerCase().includes('two')) && i === 3) {
            setState({ ...state, i: 4, lvl: 2 });
            return "You have chosen Level 2. What subject would you like to choose? (Maths, Science, English)";
        }
        if ((prompt.toLowerCase().includes('3') || prompt.toLowerCase().includes('three')) && i === 3) {
            setState({ ...state, i: 4, lvl: 3 });
            return "You have chosen Level 3. What subject would you like to choose? (Maths, Science, English)";
        }
        if ((prompt.toLowerCase().includes('4') || prompt.toLowerCase().includes('four')) && i === 3) {
            setState({ ...state, i: 4, lvl: 4 });
            return "You have chosen Level 4. What subject would you like to choose? (Maths, Science, English)";
        }
        console.log(i);
        console.log(prompt);
        if ((prompt.toLowerCase().includes('math') || prompt.toLowerCase().includes('science') || prompt.toLowerCase().includes('english')) && i === 4) {
            console.log(prompt);
            var s = prompt.toLowerCase();
            s = s.match(/(?:math|science|english)/)[0];
            var resp = "You have chosen " + s + ". Are you ready to begin?";
            console.log(resp);
            console.log(s);
            if (s === "math") {
                s = "math";
            } else if (s === "science") {
                s = "sci";
            } else if (s === "english") {
                s = "eng";
            }
            setState({ ...state, i: 5, sub: s });
            return resp;
        }
        if ((lowercasePrompt.includes('yes') || lowercasePrompt.includes('sure') || lowercasePrompt.includes('ok') || lowercasePrompt.includes('okay') || lowercasePrompt.includes('yeah') || lowercasePrompt.includes('yep') || lowercasePrompt.includes('yup') || lowercasePrompt.includes('yea')) && i === 5) {
            try {
                const response = await fetch(`https://edumadefun.proxy.beeceptor.com/questions?sub=${sub}&lvl=${lvl}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                let res = await response.json();
                setState({ ...state, i: 6, data: res, qn: 0 });
                const q = "First Question: " + res[qn].question + "<br>A. " + res[qn].options[0] + "<br>B. " + res[qn].options[1] + "<br>C. " + res[qn].options[2] + "<br>D. " + res[qn].options[3];
                return q;
            } catch (error) {
                console.error('Error fetching AI response:', error);
                return 'Error fetching AI response.';
            }
        }
        if (i > 5 && i < 10) {
            if (prompt.toLowerCase() === 'a' || prompt.toLowerCase() === 'b' || prompt.toLowerCase() === 'c' || prompt.toLowerCase() === 'd') {
                let ans = prompt.toLowerCase();
                ans = ans.charCodeAt(0) - 97;
                if (data[qn].options[ans] === data[qn].answer) {
                    setState({ ...state, score: score + 2, qn: qn + 1, i: i + 1 });
                    const ri = "Correct! Your score is " + (score + 2) + ". Next question: " + data[qn + 1].question + "<br>A. " + data[qn + 1].options[0] + "<br>B. " + data[qn + 1].options[1] + "<br>C. " + data[qn + 1].options[2] + "<br>D. " + data[qn + 1].options[3];
                    return ri;
                } else {
                    setState({ ...state, qn: qn + 1, i: i + 1 });
                    const wr = "Wrong! Your score is " + score + ". Next question: " + data[qn + 1].question + "<br>A. " + data[qn + 1].options[0] + "<br>B. " + data[qn + 1].options[1] + "<br>C. " + data[qn + 1].options[2] + "<br>D. " + data[qn + 1].options[3];
                    return wr;
                }
            }
            else {
                return "Please enter a valid answer.";
            }
        }
        if (i === 10) {
            let rand = 0;
            console.log(rand);
            setState({ ...state, i: 0, lvl: 0, score: 0, sub: '', qn: 0, data: [] });
            if (lvl === 1) {
                rand = Math.floor(Math.random() * (score)) + 1;
                console.log(rand);
            }
            else if (lvl === 2) {
                rand = Math.floor(Math.random() * (score + 2)) + 3;
            }
            else if (lvl === 3) {
                rand = Math.floor(Math.random() * (score + 4)) + 5;
            }
            else if (lvl === 4) {
                rand = Math.floor(Math.random() * (score + 6)) + 7;
            }
            console.log(rand);
            return "Your score is " + score + `. Thanks for playing!\nYou just won ${rand} points!`;
        }
        else {
            return "I'm sorry, I don't understand. Let us start over, shall we! Would you like to take a test?";
        }
    };

    useEffect(() => {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-interface">
                <div className="chat-messages" ref={messagesContainerRef}>
                    <div key={0} className={'message ai'}>
                        Hello, I am a chatbot. Ask me anything!
                    </div>
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            <div dangerouslySetInnerHTML={{ __html: message.message }} />
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
