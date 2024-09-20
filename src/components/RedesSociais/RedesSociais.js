import './RedesSociais.css'

const RedesSociais = () => {

    const ListaRedes = [
        { id: 1 , urlNome: 'Portfólio' , url: 'https://leohomepage.vercel.app/' } ,
        { id: 2 , urlNome: 'GitHub' , url: 'https://github.com/leosportt' } ,
        { id: 3 , urlNome: 'LinkedIn' , url: 'https://linkedin.com/in/leonardo-igor-5665b7209' } ,
        { id: 4 , urlNome: 'Codepen' , url: 'https://codepen.io/leosport/' } ,
        { id: 5 , urlNome: 'Instagram' , url: 'https://www.instagram.com/leo_homepage/' } ,
        { id: 6 , urlNome: 'Currículo' , url: 'https://drive.google.com/file/d/1p4JCDKK8A0xTvwkjcYGWu8hLtSBfYq-9/view?usp=sharing' }
    ]

    const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className='conteudo_links'>
        <a href={props.url}>{props.urlNome}</a>
    </div>
    )


    return (
        <>
            {LinksRedes}
        </>
    )
}
export default RedesSociais