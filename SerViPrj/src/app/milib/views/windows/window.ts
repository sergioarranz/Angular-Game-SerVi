import {View} from '../view';
import {Motor} from '../../engines/motor';
import {EventsAdmin} from '../../events/eventsadmin';
import {DataHolder} from '../../dataholder/dataholder';
import {Imagen} from '../imagenes/imagen';
import {Pieza} from '../piezas/pieza';

/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
export class Window extends View {

    private sColor:string=null;
    public pzSalir:Pieza=null;




    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);

        this.pzSalir=new Pieza(this.motor,DataHolder.instance.nScreenWidth*0.85,0,DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.1, "iz");
        this.motor.addViewToParentView(this,this.pzSalir);
        this.pzSalir.setTexto("Salir");

    }

    /**
     * Metodo paint del boton (ademas de pintar los hijos, label e imagen, aqui iria el codigo que queramos dar al boton (padre)
     * para pintarse)
     * @param vctx Contexto donde se va a pintar
     */
    paint(vctx:CanvasRenderingContext2D){

        //console.log(this.xa+"========== "+this.ya);
    }



}
