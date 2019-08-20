import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`


.logo {
    margin-top: 30px;
    margin-left: 30px;

}  
  .church-text {
    font-size: 50px;
    text-align: center;
    color: white;
  }

  .name-text {
    font-size: 10px;
    letter-spacing: 10px;
    text-indent: 20px;
    color: white;
  }
  

.card {
    width: 400px;
    height: 600px;
    border-radius: 30px;
    background-color: hsl(215, 62%, 21%);
  }
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const IndexPage = () => (

  <Wrapper>
    <Card>
      <div className='card'>


  <img className='logo' src='/static/logo.svg' />
  <p className='church-text'>新生命小組教會</p>
  <p className='name-text'>朱家瑋</p>
      </div>
    </Card>
  </Wrapper>
);

export default IndexPage;
