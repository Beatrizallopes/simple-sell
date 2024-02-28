/* eslint-disable react/prop-types */
import { Circle} from './styles';
import Spinner from '../Spinner'; 

export default function ProfileIcon({name, loading, size, fontsize}){
    const initial = name ? name.charAt(0).toUpperCase() : '?';

    if(loading){
        return (
            <Circle style={{width: size, height: size}}>
                <Spinner></Spinner>
            </Circle>
          );
    }

    return (
        <Circle style={{ width: size, height: size, fontSize: fontsize || '1.5rem'}}>
          {initial}
        </Circle>
      );
}