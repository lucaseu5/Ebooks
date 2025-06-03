import { HeaderBar, LinkCart, LinkItem, Links, Logo } from './styles'

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.png'

const Header = () => (
  <HeaderBar>
    <div>
      <Logo src={logo} alt="eBook" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoçoes</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - Produto(s)
      <img src={cart} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
