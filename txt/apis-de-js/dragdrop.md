# 1. API de dragdAndDrop

## Eventos de arrastre

Se utilizan una serie de eventos que se ejecutan durante las diversas etapas de la operación de arrastre y colocación. Ten en cuenta que se ejecutan sólo los eventos de arrastre, los eventos del ratón/mouse como mousemove no se ejecutan durante una operación de arrastre.

La propiedad dataTransfer de todos los eventos de arrastre contiene datos sobre la operación de arrastre y colocación.

### Dragstart

Se ejecuta sobre un elemento cuando se inicia una operación de arrastre. El usuario está solicitando arrastrar el elemento al que dispara el evento dragstart.

### Dragenter

El evento dragEnter se activa cuando el usuario entra en un área para soltar elementos.

### Dragover

Este evento se activa cuando el usuario se mueve sobre un área para soltar el elemento.

### dragleave

Este evento se activa cuando el usuario sale de un área para soltar elementos.

### drag

Este evento se activa cuando se comienza a arrastrar un elemento.

### drop

El evento Drop se activa cuando se suelta un elemtno

### dragend

Se activa cuando se para de arrastrar un elemento.
