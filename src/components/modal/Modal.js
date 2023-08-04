import { Component } from 'react';
import { ModalWindow, OpenModalBtn, Wrapper } from './Modal.syled';

class Modal extends Component {
  state = {
    modalVisible: false,
  };

  togleModal = () => {
    this.setState(prev => ({
      modalVisible: !prev.modalVisible,
    }));

    if (this.state.modalVisible) {
      document.querySelector('body').style.overflow = 'visible';
    } else {
      document.querySelector('body').style.overflow = 'hidden';
    }
  };

  render() {
    return (
      <>
        <OpenModalBtn onClick={this.togleModal}>open modal</OpenModalBtn>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa recusandae
          maxime enim inventore ipsum quas eum perspiciatis ullam necessitatibus, harum magnam
          deleniti eaque alias voluptatibus quam provident quod culpa laborum unde! Corrupti a enim
          ad. Natus quas repellendus assumenda, sequi est repudiandae modi quasi quae dolor
          quibusdam voluptate reiciendis. Culpa, amet quod. Non inventore ullam quibusdam autem,
          officiis iste totam aliquid, nesciunt labore ab officia ipsa quisquam quasi sed illum
          expedita ipsam dolorem porro impedit enim quos sapiente beatae. Maxime aperiam non velit
          culpa. Voluptate ad eveniet sunt sapiente, quae vitae, voluptas eius temporibus placeat
          eligendi ea labore saepe alias, magnam beatae ullam blanditiis dignissimos reiciendis.
          Voluptatibus quisquam nisi odio praesentium similique earum, nulla vero perferendis libero
          est sint, ducimus perspiciatis maiores, officia dolor eveniet facere saepe tempora neque
          ex quaerat fugiat. Quae itaque quo nulla nemo esse porro laudantium corrupti pariatur
          vitae earum? Similique obcaecati, officia dicta nisi pariatur sunt. At quod dolore
          excepturi aliquid totam in sint tempora nesciunt velit maiores quo cupiditate earum,
          deleniti exercitationem nostrum asperiores voluptates beatae, optio, corporis alias
          blanditiis ut quas! Asperiores, accusantium ducimus suscipit voluptas doloremque,
          accusamus ad unde cum aperiam est porro qui modi adipisci reiciendis dolores inventore
          quibusdam laboriosam beatae ipsum officiis. Sequi, consequatur laborum praesentium
          temporibus eaque laboriosam sit quisquam maxime doloribus quaerat saepe nesciunt odit
          obcaecati. Atque quos in quas vero perspiciatis est, id iure amet animi harum minus
          exercitationem, nulla possimus ducimus quasi dolor aliquid nihil doloremque dolores
          reprehenderit error explicabo! Animi voluptatibus asperiores reprehenderit expedita esse
          est aliquid sed inventore! A voluptatum itaque voluptates rem alias, veritatis id quidem
          non tempora pariatur, dolores eius voluptate ad adipisci officiis beatae labore
          reprehenderit deserunt, ipsum error. Corporis ullam dolores mollitia illo excepturi qui
          perferendis explicabo voluptates voluptatum quod. Consequuntur, nobis, a soluta ad,
          tenetur aperiam architecto autem dolorem iste eius eveniet. Suscipit ducimus aliquam
          possimus atque at consequuntur delectus excepturi quo beatae officia recusandae sunt
          quidem rem, repudiandae necessitatibus inventore deleniti nostrum optio labore. Voluptates
          nemo eaque vitae ex iure, ab at hic dolore aperiam corporis modi sint! Quis consequatur
          architecto optio aliquid cumque reiciendis fuga quibusdam nisi a itaque at magni, id,
          nulla eaque quia unde officiis cupiditate provident. Facere a officiis eum vero odio.
          Cupiditate possimus provident id delectus cum nesciunt beatae labore assumenda. Illo odio
          praesentium molestias enim repellendus! Sit earum natus laborum eius ipsum? Reprehenderit
          quis atque culpa rerum libero temporibus beatae sint! Quis quia asperiores laboriosam
          ratione sunt soluta, nam, tempora facere voluptatum necessitatibus quisquam accusamus
          nobis fugiat alias temporibus! Impedit debitis consequatur nemo harum provident eius
          corporis officia ad repellat reiciendis corrupti nihil officiis recusandae dolor
          laboriosam deserunt optio illo, quo consectetur. Repellat optio quasi dicta cupiditate aut
          ipsa amet laudantium maiores quos adipisci libero nesciunt ad aperiam ex molestias
          suscipit ipsam quis ratione, distinctio molestiae rem omnis! Cupiditate molestias impedit
          officiis suscipit pariatur saepe velit fuga ut, vitae ex nam earum sint. Pariatur optio
          itaque suscipit aliquid commodi quam nobis excepturi? Repellat aut suscipit repellendus
          similique corrupti nulla tenetur dolore? soluta, nam, tempora facere voluptatum
          necessitatibus quisquam accusamus nobis fugiat alias temporibus! Impedit debitis
          consequatur nemo harum provident eius corporis officia ad repellat reiciendis corrupti
          nihil officiis recusandae dolor laboriosam deserunt optio illo, quo consectetur. Repellat
          optio quasi dicta cupiditate aut ipsa amet laudantium maiores quos adipisci libero
          nesciunt ad aperiam ex molestias suscipit ipsam quis ratione, distinctio molestiae rem
          omnis! Cupiditate molestias impedit officiis suscipit pariatur saepe velit fuga ut, vitae
          ex nam earum sint. Pariatur optio itaque suscipit aliquid commodi quam nobis excepturi?
          Repellat aut suscipit repellendus similique corrupti nulla tenetur dolore? soluta, nam,
          tempora facere voluptatum necessitatibus quisquam accusamus nobis fugiat alias temporibus!
          Impedit debitis consequatur nemo harum provident eius corporis officia ad repellat
          reiciendis corrupti nihil officiis recusandae dolor laboriosam deserunt optio illo, quo
          consectetur. Repellat optio quasi dicta cupiditate aut ipsa amet laudantium maiores quos
          adipisci libero nesciunt ad aperiam ex molestias suscipit ipsam quis ratione, distinctio
          molestiae rem omnis! Cupiditate molestias impedit officiis suscipit pariatur saepe velit
          fuga ut, vitae ex nam earum sint. Pariatur optio itaque suscipit aliquid commodi quam
          nobis excepturi? Repellat aut suscipit repellendus similique corrupti nulla tenetur
          dolore? soluta, nam, tempora facere voluptatum necessitatibus quisquam accusamus nobis
          fugiat alias temporibus! Impedit debitis consequatur nemo harum provident eius corporis
          officia ad repellat reiciendis corrupti nihil officiis recusandae dolor laboriosam
          deserunt optio illo, quo consectetur. Repellat optio quasi dicta cupiditate aut ipsa amet
          laudantium maiores quos adipisci libero nesciunt ad aperiam ex molestias suscipit ipsam
          quis ratione, distinctio molestiae rem omnis! Cupiditate molestias impedit officiis
          suscipit pariatur saepe velit fuga ut, vitae ex nam earum sint. Pariatur optio itaque
          suscipit aliquid commodi quam nobis excepturi? Repellat aut suscipit repellendus similique
          corrupti nulla tenetur dolore? soluta, nam, tempora facere voluptatum necessitatibus
          quisquam accusamus nobis fugiat alias temporibus! Impedit debitis consequatur nemo harum
          provident eius corporis officia ad repellat reiciendis corrupti nihil officiis recusandae
          dolor laboriosam deserunt optio illo, quo consectetur. Repellat optio quasi dicta
          cupiditate aut ipsa amet laudantium maiores quos adipisci libero nesciunt ad aperiam ex
          molestias suscipit ipsam quis ratione, distinctio molestiae rem omnis! Cupiditate
          molestias impedit officiis suscipit pariatur saepe velit fuga ut, vitae ex nam earum sint.
          Pariatur optio itaque suscipit aliquid commodi quam nobis excepturi? Repellat aut suscipit
          repellendus similique corrupti nulla tenetur dolore? soluta, nam, tempora facere
          voluptatum necessitatibus quisquam accusamus nobis fugiat alias temporibus! Impedit
          debitis consequatur nemo harum provident eius corporis officia ad repellat reiciendis
          corrupti nihil officiis recusandae dolor laboriosam deserunt optio illo, quo consectetur.
          Repellat optio quasi dicta cupiditate aut ipsa amet laudantium maiores quos adipisci
          libero nesciunt ad aperiam ex molestias suscipit ipsam quis ratione, distinctio molestiae
          rem omnis! Cupiditate molestias impedit officiis suscipit pariatur saepe velit fuga ut,
          vitae ex nam earum sint. Pariatur optio itaque suscipit aliquid commodi quam nobis
          excepturi? Repellat aut suscipit repellendus similique corrupti nulla tenetur dolore?
          soluta, nam, tempora facere voluptatum necessitatibus quisquam accusamus nobis fugiat
          alias temporibus! Impedit debitis consequatur nemo harum provident eius corporis officia
          ad repellat reiciendis corrupti nihil officiis recusandae dolor laboriosam deserunt optio
          illo, quo consectetur. Repellat optio quasi dicta cupiditate aut ipsa amet laudantium
          maiores quos adipisci libero nesciunt ad aperiam ex molestias suscipit ipsam quis ratione,
          distinctio molestiae rem omnis! Cupiditate molestias impedit officiis suscipit pariatur
          saepe velit fuga ut, vitae ex nam earum sint. Pariatur optio itaque suscipit aliquid
          commodi quam nobis excepturi? Repellat aut suscipit repellendus similique corrupti nulla
          tenetur dolore?
        </p>
        {this.state.modalVisible && (
          <Wrapper>
            <ModalWindow>
              <h3>modal title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatem.</p>
              <button onClick={this.togleModal}>close</button>
            </ModalWindow>
          </Wrapper>
        )}
      </>
    );
  }
}

export default Modal;
