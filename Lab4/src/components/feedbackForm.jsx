function Form(props) {

    let email = props.email;
    let subject = props.subject;
    let name = props.name;
    let text = props.text;

    function handleSubmit(e) {
        
        e.preventDefault();

        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(email.current.value) === false) {
            alert("inccorect email");
            return;
        }

        alert("Ваше повідомлення відправлено");

        console.log("Email: " + email.current.value);
        console.log("Subject: " + subject.current.value);
        console.log("name: " + name.current.value);
        console.log("message: " + text.current.value);
        email.current.value = "";
        subject.current.value = "";
        name.current.value = "";
        text.current.value = "";
    }

    return (
        <div>
            <h1>Зворотній зв'язок</h1>
            <p>Задай своє запитання, або повідом про порушення під час вступної кампанії</p>
            <form>
                <div>
                    <p>
                        <span>
                            <input type="text" ref={name} placeholder="Ім'я" name="your-name" />
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>
                            <input type="text" ref={email} placeholder="Email*" required name="your-email" />
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>
                            <input type="text" ref={subject} placeholder="Тема*" required name="your-subject" />
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>
                            <textarea cols="21" ref={text} rows="10" placeholder="Повідомлення" name="your-message" />
                        </span>
                    </p>
                </div>

                <div>
                    <p>
                        <span>
                            <input type="submit" value="Відправити" onClick={handleSubmit} />
                        </span>
                    </p>
                </div>
            </form>
        </div>)

}

export default Form;