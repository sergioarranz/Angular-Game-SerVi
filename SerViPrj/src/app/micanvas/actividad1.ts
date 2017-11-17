
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imagenes/imagen';
import {Window} from '../milib/views/windows/window';
import {Text} from '../milib/views/texts/text';
import {Pieza} from '../milib/views/piezas/pieza'
export class Actividad1 implements EventsAdminListener{

    private motor:Motor;
    private panelMenu:Panel;
    private imagenFondo:Imagen;
    private pzInicio:Pieza;
    private pzSalir:Pieza;
    private window:Window;
    private arParejas:Array<string[]>;
    private piezaDc1:Pieza;
    private piezaIz1:Pieza;
    private piezaDc2:Pieza;
    private piezaIz2:Pieza;
    private piezaDc3:Pieza;
    private piezaIz3:Pieza;
    private posPareja1:number=-1;
    private posPareja2:number=-1;
    private posPrimera:number=-1;
    private posSegunda:number=-1;
    private primeraPieza:Pieza;
    private segundaPieza:Pieza;
    private numAciertos:number=0;
    private txtAciertos:Text;
    private imagen1:Imagen;
    private imagen2:Imagen;
    private imagen3:Imagen;


    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondo.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.window = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.window.pzSalir.setListener(this);
        this.crearEscenarioMenu();
        this.crearEscenarioJuego();
        //this.contador = -1;



    }

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu():void{
        let pmw=DataHolder.instance.nScreenWidth*0.6;
        let pmh=DataHolder.instance.nScreenHeight*0.6;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);
        this.panelMenu=new Panel(this.motor,pmx,pmy,pmw,pmh);


        this.motor.addViewToParentView(this.imagenFondo,this.panelMenu);

        this.pzInicio=new Pieza(this.motor,this.panelMenu.w/3,0,this.panelMenu.w/3,this.panelMenu.h/3, "iz");
        this.motor.addViewToParentView(this.panelMenu, this.pzInicio);
        this.pzInicio.setTexto("Inicio");
        this.pzInicio.setListener(this);

        this.pzSalir=new Pieza(this.motor,this.panelMenu.w/3,this.panelMenu.h/3*2,this.panelMenu.w/3,this.panelMenu.h/3, "dc");
        this.motor.addViewToParentView(this.panelMenu, this.pzSalir);
        this.pzSalir.setTexto("Salir");
        this.pzSalir.setListener(this);

        this.motor.addViewToParentView(this.imagenFondo, this.window);
        this.motor.setViewVisibility(this.window.uid, false);
    }

    private crearEscenarioJuego():void{
        // PIEZAS
        this.arParejas= new Array<string[]>();
        this.piezaIz1 = new Pieza(this.motor,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.7,this.panelMenu.w/3,this.panelMenu.h/3, "dc");
        this.piezaDc1 = new Pieza(this.motor,DataHolder.instance.nScreenWidth*0.7,DataHolder.instance.nScreenHeight*0.7,this.panelMenu.w/3,this.panelMenu.h/3, "iz");
        this.motor.addViewToParentView(this.window, this.piezaIz1);
        this.motor.addViewToParentView(this.window, this.piezaDc1);

        this.piezaIz1.setListener(this);
        this.piezaDc1.setListener(this);

        this.piezaIz2 = new Pieza(this.motor,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.5,this.panelMenu.w/3,this.panelMenu.h/3, "dc");
        this.piezaDc2 = new Pieza(this.motor,DataHolder.instance.nScreenWidth*0.7,DataHolder.instance.nScreenHeight*0.5,this.panelMenu.w/3,this.panelMenu.h/3, "iz");
        this.motor.addViewToParentView(this.window, this.piezaIz2);
        this.motor.addViewToParentView(this.window, this.piezaDc2);

        this.piezaIz2.setListener(this);
        this.piezaDc2.setListener(this);

        this.piezaIz3 = new Pieza(this.motor,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.3,this.panelMenu.w/3,this.panelMenu.h/3, "dc");
        this.piezaDc3 = new Pieza(this.motor,DataHolder.instance.nScreenWidth*0.7,DataHolder.instance.nScreenHeight*0.3,this.panelMenu.w/3,this.panelMenu.h/3, "iz");
        this.motor.addViewToParentView(this.window, this.piezaIz3);
        this.motor.addViewToParentView(this.window, this.piezaDc3);

        this.piezaIz3.setListener(this);
        this.piezaDc3.setListener(this);

        this.imagen1=new Imagen(this.motor,DataHolder.instance.nScreenWidth*0.3,0,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.2);
        this.imagen1.setImg('./assets/imagen1.jpg');
        this.motor.addViewToParentView(this.window, this.imagen1);

        this.imagen2=new Imagen(this.motor,DataHolder.instance.nScreenWidth*0.55,0,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.2);
        this.imagen2.setImg('./assets/imagen2.jpg');
        this.motor.addViewToParentView(this.window, this.imagen2);

        this.imagen3=new Imagen(this.motor,DataHolder.instance.nScreenWidth*0.15,0,DataHolder.instance.nScreenWidth*0.1,DataHolder.instance.nScreenHeight*0.2);
        this.imagen3.setImg('./assets/imagen3.jpg');
        this.motor.addViewToParentView(this.window, this.imagen3);

        this.txtAciertos = new Text(this.motor,DataHolder.instance.nScreenWidth*0.5,DataHolder.instance.nScreenHeight*0.5,this.panelMenu.w/3,this.panelMenu.h/3);
        this.motor.addViewToParentView(this.window, this.txtAciertos);
        this.txtAciertos.setTexto("");

        //RESPUESTAS
        this.arParejas = new Array<string[]>();
        let arrAux :string[] = ["He is","playing with toys"] //jugando
        this.arParejas[0] = arrAux;
        arrAux = ["He likes","to swim"];//comiendo
        this.arParejas[1] = arrAux;
        arrAux = ["He loves","to eat pizza"];// nadando
        this.arParejas[2] = arrAux;

    }

    public Aleatorio():void{
      var auxPieza1:boolean = false;
      var auxPieza2:boolean = false;
      var auxPieza3:boolean = false;
      for (var i = 0; i < this.arParejas.length; i++) {
          let random:number = Math.floor(Math.random() * 3) + 1
          if (random == 1 && !auxPieza1) {
              this.piezaIz1.setTexto(this.arParejas[i][0]);
              auxPieza1 = true;
          }else if (random == 2 && !auxPieza2) {
              this.piezaIz2.setTexto(this.arParejas[i][0]);
              auxPieza2 = true;
          }else if (random == 3 && !auxPieza3) {
              this.piezaIz3.setTexto(this.arParejas[i][0]);
              auxPieza3 = true;
          } else {
            i--;
          }
      }

      auxPieza1 = false;
      auxPieza2 = false;
      auxPieza3 = false;
      for (var i = 0; i < this.arParejas.length; i++) {
          let random:number = Math.floor(Math.random() * 3) + 1
          if (random == 1 && !auxPieza1) {
              this.piezaDc1.setTexto(this.arParejas[i][1]);
              auxPieza1 = true;
          }else if (random == 2 && !auxPieza2) {
              this.piezaDc2.setTexto(this.arParejas[i][1]);
              auxPieza2 = true;
          }else if (random == 3 && !auxPieza3) {
              this.piezaDc3.setTexto(this.arParejas[i][1]);
              auxPieza3 = true;
          } else {
            i--;
          }
      }
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

      public comprobar():void {
        if (this.posPrimera == 0){
          // COMPROBAR PIEZA DCHA. (1)

          if (this.arParejas[this.posPareja1][1]==this.arParejas[this.posPareja2][this.posSegunda]){
          this.motor.setViewVisibility(this.primeraPieza.uid, false);
          this.motor.setViewVisibility(this.segundaPieza.uid, false);
          this.numAciertos++;

          if (this.posPareja1==0){
            this.motor.setViewVisibility(this.imagen1.uid, false);
          } else if (this.posPareja1==1){
            this.motor.setViewVisibility(this.imagen2.uid, false);
          } else if (this.posPareja1==2){
            this.motor.setViewVisibility(this.imagen3.uid, false);
          }
          this.posPareja1= -1;
          this.posPareja2= -1;
          this.posPrimera= -1;
          this.posSegunda= -1;

          if (this.numAciertos==3){
            this.motor.setViewVisibility(this.window.uid, false);
            this.imagenFondo.setImg('./assets/win.png');
          }
          this.txtAciertos.setTexto("")
          }else {
            this.txtAciertos.setTexto("Are you sure? Try again :)")
            this.txtAciertos.setFontColor("#ff0000");
          }

        } else if (this.posPrimera == 1) {
          // COMPROBAR PIEZA IZDA. (0)
          if (this.arParejas[this.posPareja1][0]==this.arParejas[this.posPareja2][this.posSegunda]){
            this.motor.setViewVisibility(this.primeraPieza.uid, false);
            this.motor.setViewVisibility(this.segundaPieza.uid, false);
            this.numAciertos++;

            if (this.posPareja1==0){
              this.motor.setViewVisibility(this.imagen1.uid, false);
            } else if (this.posPareja1==1){
              this.motor.setViewVisibility(this.imagen2.uid, false);
            } else if (this.posPareja1==2){
              this.motor.setViewVisibility(this.imagen3.uid, false);
            }
            this.posPareja1= -1;
            this.posPareja2= -1;
            this.posPrimera= -1;
            this.posSegunda= -1;
            if (this.numAciertos==3){
              this.motor.setViewVisibility(this.window.uid, false);
              this.imagenFondo.setImg('./assets/win.png');
            }
            this.txtAciertos.setTexto("")
          }else {
            this.txtAciertos.setTexto("Are you sure? Try again :)")
            this.txtAciertos.setFontColor("#ff0000");
          }
        }
      }

      piezaListenerOnClick?(pz:Pieza):void{
        if(pz == this.piezaDc1){
            for (var i = 0; i < this.arParejas.length; i++) {
                  // FALSE 0 TRUE 1
                    var capa:string =  this.piezaDc1.getTexto();
                    var posAux:number = this.arParejas[i].indexOf(capa)
                    if (posAux == 0) {
                      if (this.posPrimera <0) {
                          this.posPrimera = 0;
                          this.posPareja1 = i;
                          this.primeraPieza = this.piezaDc1;
                      }else if(this.posPrimera >= 0){
                          this.posSegunda = 0;
                          this.posPareja2 = i;
                          this.segundaPieza = this.piezaDc1;
                          //Crear metodo para comprobar si
                          this.comprobar();
                      }
                    }else if(posAux == 1){
                      if (this.posPrimera < 0) {
                          this.posPrimera = 1;
                          this.posPareja1 = i;
                          this.primeraPieza = this.piezaDc1;
                      }else if(this.posPrimera >= 0){
                          this.posSegunda = 1;
                          this.posPareja2 = i;
                          this.segundaPieza = this.piezaDc1;
                          //Crear metodo para comprobar si
                          this.comprobar();
                      }
                    }else{

                    }

            }

            //this.motor.setViewVisibility(this.panelMenu.uid,false);
            //this.motor.setViewVisibility(this.window.uid,true);

        }else if(pz == this.piezaDc2){
            for (var i = 0; i < this.arParejas.length; i++) {
                    var capa:string =  this.piezaDc2.getTexto();
                    var posAux:number = this.arParejas[i].indexOf(capa)
                    if (posAux == 0) {
                      if (this.posPrimera <0) {
                          this.posPrimera = 0;
                          this.posPareja1 = i;
                          this.primeraPieza = this.piezaDc2;
                      }else if(this.posPrimera >= 0){
                          this.posSegunda = 0;
                          this.posPareja2 = i;
                          this.segundaPieza = this.piezaDc2;
                          //Crear metodo para comprobar si
                          this.comprobar();
                      }
                    }else if(posAux == 1){
                      if (this.posPrimera < 0) {
                          this.posPrimera = 1;
                          this.posPareja1 = i;
                          this.primeraPieza = this.piezaDc2;
                      }else if(this.posPrimera >= 0){
                          this.posSegunda = 1;
                          this.posPareja2 = i;
                          this.segundaPieza = this.piezaDc2;
                          //Crear metodo para comprobar si
                          this.comprobar();
                      }
                    }else{

                    }

            }
          }else if(pz == this.piezaDc3){
              for (var i = 0; i < this.arParejas.length; i++) {
                      var capa:string =  this.piezaDc3.getTexto();
                      var posAux:number = this.arParejas[i].indexOf(capa)
                      if (posAux == 0) {
                        if (this.posPrimera <0) {
                            this.posPrimera = 0;
                            this.posPareja1 = i;
                            this.primeraPieza = this.piezaDc3;
                        }else if(this.posPrimera >= 0){
                            this.posSegunda = 0;
                            this.posPareja2 = i;
                            this.segundaPieza = this.piezaDc3;
                            //Crear metodo para comprobar si
                            this.comprobar();
                        }
                      }else if(posAux == 1){
                        if (this.posPrimera < 0) {
                            this.posPrimera = 1;
                            this.posPareja1 = i;
                            this.primeraPieza = this.piezaDc3;
                        }else if(this.posPrimera >= 0){
                            this.posSegunda = 1;
                            this.posPareja2 = i;
                            this.segundaPieza = this.piezaDc3;
                            //Crear metodo para comprobar si
                            this.comprobar();
                        }
                      }else{

                      }

              }
            } else if(pz == this.piezaIz1){
                for (var i = 0; i < this.arParejas.length; i++) {
                        var capa:string =  this.piezaIz1.getTexto();
                        var posAux:number = this.arParejas[i].indexOf(capa)
                        if (posAux == 0) {
                          if (this.posPrimera <0) {
                              this.posPrimera = 0;
                              this.posPareja1 = i;
                              this.primeraPieza = this.piezaIz1;
                          }else if(this.posPrimera >= 0){
                              this.posSegunda = 0;
                              this.posPareja2 = i;
                              this.segundaPieza = this.piezaIz1;
                              //Crear metodo para comprobar si
                              this.comprobar();
                          }
                        }else if(posAux == 1){
                          if (this.posPrimera < 0) {
                              this.posPrimera = 1;
                              this.posPareja1 = i;
                                this.primeraPieza = this.piezaIz1;
                          }else if(this.posPrimera >= 0){
                              this.posSegunda = 1;
                              this.posPareja2 = i;
                              this.segundaPieza = this.piezaIz1;
                              //Crear metodo para comprobar si
                              this.comprobar();
                          }
                        }else{

                        }

                }
              } else if(pz == this.piezaIz2){
                  for (var i = 0; i < this.arParejas.length; i++) {
                          var capa:string =  this.piezaIz2.getTexto();
                          var posAux:number = this.arParejas[i].indexOf(capa)
                          if (posAux == 0) {
                            if (this.posPrimera <0) {
                                this.posPrimera = 0;
                                this.posPareja1 = i;
                                  this.primeraPieza = this.piezaIz2;
                            }else if(this.posPrimera >= 0){
                                this.posSegunda = 0;
                                this.posPareja2 = i;
                                this.segundaPieza = this.piezaIz2;
                                //Crear metodo para comprobar si
                                this.comprobar();
                            }
                          }else if(posAux == 1){
                            if (this.posPrimera < 0) {
                                this.posPrimera = 1;
                                this.posPareja1 = i;
                                  this.primeraPieza = this.piezaIz2;
                            }else if(this.posPrimera >= 0){
                                this.posSegunda = 1;
                                this.posPareja2 = i;
                                this.segundaPieza = this.piezaIz2;
                                //Crear metodo para comprobar si
                                this.comprobar();
                            }
                          }else{

                          }

                  }
                } else if(pz == this.piezaIz3){
                    for (var i = 0; i < this.arParejas.length; i++) {
                            var capa:string =  this.piezaIz3.getTexto();
                            var posAux:number = this.arParejas[i].indexOf(capa)
                            if (posAux == 0) {
                              if (this.posPrimera <0) {
                                  this.posPrimera = 0;
                                  this.posPareja1 = i;
                                    this.primeraPieza = this.piezaIz3;
                              }else if(this.posPrimera >= 0){
                                  this.posSegunda = 0;
                                  this.posPareja2 = i;
                                  this.segundaPieza = this.piezaIz3;
                                  this.comprobar();
                              }
                            }else if(posAux == 1){
                              if (this.posPrimera < 0) {
                                  this.posPrimera = 1;
                                  this.posPareja1 = i;
                                    this.primeraPieza = this.piezaIz3;
                              }else if(this.posPrimera >= 0){
                                  this.posSegunda = 1;
                                  this.posPareja2 = i;
                                  this.segundaPieza = this.piezaIz3;
                                  this.comprobar();
                              }
                            }else{

                            }

                    }
                  } else if (pz == this.pzInicio) {
                    this.Aleatorio();
                    this.motor.setViewVisibility(this.panelMenu.uid, false);
                    this.motor.setViewVisibility(this.window.uid, true);
                    // TODO math random mainGameImg

                  } else if (pz == this.pzSalir) {
                    this.motor.setViewVisibility(this.panelMenu.uid, false);
                    this.imagenFondo.setImg('./assets/findejuego.jpg');
                  } else if (pz == this.window.pzSalir) {
                    this.motor.setViewVisibility(this.window.uid, false);
                    this.motor.setViewVisibility(this.panelMenu.uid, true);
                    this.posPareja1= -1;
                    this.posPareja2= -1;
                    this.posPrimera= -1;
                    this.posSegunda= -1;
                    this.motor.setViewVisibility(this.piezaDc1.uid, true);
                    this.motor.setViewVisibility(this.piezaDc2.uid, true);
                    this.motor.setViewVisibility(this.piezaDc3.uid, true);
                    this.motor.setViewVisibility(this.piezaIz1.uid, true);
                    this.motor.setViewVisibility(this.piezaIz2.uid, true);
                    this.motor.setViewVisibility(this.piezaIz3.uid, true);
                    this.motor.setViewVisibility(this.imagen1.uid, true);
                    this.motor.setViewVisibility(this.imagen2.uid, true);
                    this.motor.setViewVisibility(this.imagen3.uid, true);
                    this.numAciertos=0;
                  }




// COGER PIEZA QUE SE HA PULSADO CON UNA AUX













            /*else if(btn == this.window.btnSalir){
            this.motor.setViewVisibility(this.window.uid, false);
            this.motor.setViewVisibility(this.panelMenu.uid,true);
        }

        else if(btn == this.btnSalir){
            this.motor.setViewVisibility(this.panelMenu.uid,false);
            this.imagenFondo.setImg('./assets/findejuego.jpg');
        }*/
        else{
        }



    }
}
