import Corpo from "./Corpo";
import Pedido from "./Pedido";
import Titulo from "./Titulo";

const App = () => {
  return (
    <div className="container border my-2 text-center">
      <div className="row">
        <div className="col-12 display-5">
          <Titulo />
        </div>
      </div>
      <div className="row">

        {/* primeiro pedido */}
        <div className="col-sm-12 col-md-6 col-xl-4">
            <Pedido date="22/04/2023" title="Pizza de Mussarela" description="Pizza de mussarela e tomate" iconStyle="fa-solid" iconName="fa-pizza-slice"/>
        </div>

         {/* segundo pedido */}
         <div className="col-sm-12 col-md-6 col-xl-4">
         <Pedido date="22/05/2023" title="Pizza de Calabresa" description="Calabresa e tomate" iconStyle="fa-solid" iconName="fa-pizza-slice"/>
        </div>

         {/* terceiro pedido */}
         <div className="col-sm-12 col-md-6 col-xl-4">
         <Pedido date="22/06/2023" title="Pizza de Portuguesa" description="Presunto, tomate e queijo" iconStyle="fa-solid" iconName="fa-pizza-slice"/>
        </div>

        {/* quarto pedido */}
        <div className="col-sm-12 col-md-6 col-xl-4">
        <Pedido  date="22/07/2023" title="Pizza de Escarola" description="Presunto, ovo e escarola" iconStyle="fa-solid" iconName="fa-pizza-slice"/>
        </div>

      </div>
    </div>
  );
};
export default App;
