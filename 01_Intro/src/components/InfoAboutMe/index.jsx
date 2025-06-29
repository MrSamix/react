function InfoAboutMe() {
    return (
        <div>
            <h2>Про мене</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                <img src="https://fsx1.itstep.org/api/v1/files/9Y3VgGLBD1iyArtTt8ajhwWJ4k5WxDPd" height={250} />
                <div>
                    <p>Привіт! Мене звати Олександр, я студент IT Step Academy. Моя мета - стати професійним розробником програмного забезпечення.</p>
                    <p>Я люблю вивчати нові технології, працювати над цікавими проектами та ділитися знаннями з іншими.</p>
                    <p><b>Phone:</b> +380999999999</p>
                    <p><b>Email:</b> test@gmail.com</p>
                    <p><b>Досвід роботи:</b> відсутній</p>
                    <p></p>
                    <h3>Мої навички:</h3>
                    <ul style={{textAlign: 'left'}}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default InfoAboutMe;