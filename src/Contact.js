import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .transform {
      text-transform: Capitalize;
      font-size: 19px;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.8905979176475!2d74.32316441500656!3d31.444678658022337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190453e81936df%3A0xf177526ee0796131!2sShopistan!5e0!3m2!1sen!2s!4v1671694537158!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/moqzaneg" method="POST" className="contact-inputs">
            <input className="transform" type="text" placeholder="UserName" name="Username" required autoComplete="off"/>
            <input className="transform" type="email" placeholder=" Enter Email" name="Enter" required autoComplete="off"/>
            <textarea className="transform" name="Message" placeholder="Enter Message Here" required autoComplete="off" cols="30" rows="10"></textarea>
            <input className="transform" type="submit" value="Send"/>
          </form>
          <div>
            <h3>Call Us</h3>
            <a href="tel: 3069838864">+92 3069838864</a>
            <p>@{new Date().getFullYear()} ZeeDevelopers. All right reserved</p>
          </div>
        </div>

      </div>
    </Wrapper>
  )
};

export default Contact;
