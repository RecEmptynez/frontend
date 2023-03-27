interface TooltipProp {
    placement: string;
    width: number;
    height: number;
    parentWidth: number;
    parentHeight: number;
    visible: string;
    text: string;
  }

export const Tooltip = (props: TooltipProp) => {
    // Where to put tooltip: left, center or right
    let marginLeft;
    switch(props.placement){
        case 'left':
            marginLeft = 0;
            break;
        case 'right':
            marginLeft = props.parentWidth;
            break;
        default: // center on default
            marginLeft = Math.floor((props.parentWidth - props.width)/2);
    }

    return(
        <div className="z-[1] bg-beige-1200 absolute rounded-[10px]" style={{width: props.width, height: props.height,
            marginTop: props.parentHeight + 1, marginLeft: marginLeft, display: props.visible}}>
            <p className="text-[10px] text-white text-center mt-[5px]">{props.text}</p>
        </div>
    )
}