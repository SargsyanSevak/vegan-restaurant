import FreshFood from '../assets/fresh-food.svg'
import Chef from '../assets/chef.svg'
import Dishes from '../assets/dishes.svg'
import { SpecialDataProps } from '../interfaces/interfaces'

export const specialData:SpecialDataProps[] = [
    {
        id:'1',
        title:'Fresh Food',
        imgUrl : FreshFood,
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
    },
    {
        id:'2',
        title:'Skilled Chef',
        imgUrl : Chef,
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
    },
    {
        id:'3',
        title:'Exotic dishes',
        imgUrl : Dishes,
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
    },
]