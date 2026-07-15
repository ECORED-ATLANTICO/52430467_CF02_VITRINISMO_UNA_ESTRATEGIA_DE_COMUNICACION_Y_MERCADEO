<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estrategias de exhibición',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de diseño y aplicación de estrategias de exhibición en un negocio.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de una estrategia de exhibición comercial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentar productos de forma atractiva para estimular la compra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el espacio de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las estrategias de exhibición buscan presentar los productos de manera atractiva para captar la atención del consumidor y favorecer la compra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué recurso se utiliza para fortalecer la promoción visual de productos y marcas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facturación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Material publicitario y visual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La promoción visual utiliza recursos gráficos y publicitarios para comunicar mensajes comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es la relación principal entre merchandising y ventas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorecer la visibilidad y rotación de productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuir la exhibición comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar promociones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el contacto con el cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El merchandising busca aumentar la visibilidad de los productos y estimular las ventas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué función cumplen los elementos informativos de exhibición?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar pagos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenar mercancías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comunicar información relevante sobre productos y promociones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los elementos informativos facilitan la comunicación de características, beneficios and promociones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes corresponde a material publicitario para exhibición?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Afiches y pendones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Facturas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contratos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprobantes de pago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los afiches, pendones y carteles son recursos ampliamente utilizados en exhibiciones comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué permite la aplicación de elementos visuales en vitrinas?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el flujo de clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar promociones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Destacar productos y atraer consumidores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los elementos visuales fortalecen el atractivo de la vitrina y favorecen la experiencia de compra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué son los servicios logísticos internos en merchandising?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Procesos realizados dentro del establecimiento para apoyar la exhibición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Actividades exclusivas de proveedores externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actividades publicitarias digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los servicios logísticos internos facilitan el montaje, organización y mantenimiento de exhibiciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una característica de los servicios logísticos externos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son realizados únicamente por vendedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Corresponden a actividades contables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se enfocan en procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Son prestados por terceros para apoyar la exhibición comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los servicios logísticos externos complementan las actividades de exhibición mediante proveedores especializados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumple el apoyo logístico en el montaje comercial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar la instalación y organización de exhibiciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar material promocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la estrategia de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la exhibición de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El apoyo logístico permite implementar adecuadamente los elementos de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza una exhibición horizontal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organización diagonal de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distribución de productos de arriba hacia abajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación de productos en un mismo nivel visual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exhibición exclusiva para vitrinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La exhibición horizontal ubica los productos en una misma línea visual para facilitar la comparación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué caracteriza una exhibición vertical?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ubicar productos en un mismo estante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distribuir productos de arriba hacia abajo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar niveles visuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar únicamente vitrinas cerradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál es una característica de las exhibiciones abiertas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Restringen el acceso visual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se utilizan solo en bodegas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permiten la interacción directa con los productos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminan la comunicación visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué finalidad tienen las exhibiciones promocionales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Destacar campañas y productos específicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar la visibilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir las vitrinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es la función principal de una vitrina comercial?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Atraer consumidores y exhibir productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar mercancías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar pagos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué son los puntos de exhibición en almacenes?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Áreas destinadas a presentar productos al consumidor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Espacios administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zonas de facturación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bodegas de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué caracteriza a un espacio estratégico de exhibición?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Baja circulación de personas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo para almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación con alta visibilidad y tráfico de clientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Restricción al acceso del consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué son las estrategias visuales dentro del mercadeo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acciones para organizar y comunicar visualmente productos y marcas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Procedimientos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesos de contratación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Métodos de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué permite la aplicación de estrategias comerciales en exhibición?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la percepción del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la comunicación y el posicionamiento de productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar promociones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la visibilidad comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cómo influye una exhibición adecuada en las ventas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la rotación de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuye la experiencia del cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Favorece la atención del consumidor y la intención de compra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina la necesidad de promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito del análisis de un punto de venta como ejemplo comercial aplicado?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar la aplicación práctica de las estrategias de exhibición y merchandising.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir la formación teórica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar procesos logísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la comunicación visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La respuesta corresponde a los conceptos desarrollados en el componente Estrategias de exhibición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
