import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { useEffect } from 'react';

// Fix default icon issues in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const CustomZoomControl = ({ position = 'topright' }) => {
    const map = useMap();
    useEffect(() => {
        const control = L.control.zoom({ position }).addTo(map);
        return () => {
            map.removeControl(control);
        };

    }, [map, position]);
    return null;
};

const MyMap = () => {
    return (
        <section className=' bg-[#F2F8F1]'>
            <section className='mx-auto max-w-screen-2xl pt-20'>
                <div className='text-center'>
                    <p className='uppercase md:text-base text-sm text-[#14452F]'>——— Contact Us ———</p>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-12 pt-5'>Our Global Office Locations</h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 items-center justify-center px-5 md:px-10'>
                    <div className='text-white bg-[#14452F] z-30 lg:-mb-20 w-full p-8 flex flex-col gap-3'>
                        <h3 className='text-2xl font-bold pb-5'>USA</h3>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><FaLocationDot className='text-2xl' /></span>NO: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><IoCall className='text-2xl' /></span>000-123-456789</p>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><IoIosMail className='text-2xl' /></span><a className='hover:text-[#7CFF77] transition-colors duration-300' href="mailto:info@example.com">info@example.com</a></p>
                    </div>
                    <div className='text-white bg-[#14452F] z-30 lg:-mb-20 w-full p-8 flex flex-col gap-3'>
                        <h3 className='text-2xl font-bold pb-5'>Spain</h3>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><FaLocationDot className='text-2xl' /></span>Manzana Alicia Briseño, 59, Rubí, Cbr 36738</p>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><IoCall className='text-2xl' /></span>000-123-456789</p>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><IoIosMail className='text-2xl' /></span><a className='hover:text-[#7CFF77] transition-colors duration-300' href="mailto:contact@example.com">contact@example.com</a></p>
                    </div>
                    <div className='text-white bg-[#14452F] z-30 lg:-mb-20 w-full p-8 flex flex-col gap-3'>
                        <h3 className='text-2xl font-bold pb-5'>France</h3>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><FaLocationDot className='text-2xl' /></span>7 Sente Des Pierres Mayettes, 33305 Dijon</p>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><IoCall className='text-2xl' /></span>000-123-456789</p>
                        <p className='flex gap-3 items-center text-lg leading-8'><span><IoIosMail className='text-2xl' /></span><a className='hover:text-[#7CFF77] transition-colors duration-300' href="mailto:support@example.com">support@example.com</a></p>
                    </div>
                </div>
                <div>
                    <MapContainer className='h-72 md:h-[550px]' center={[24.374981, 91.410133]} zoom={13} style={{ width: '100%', zIndex: 10 }} scrollWheelZoom={false} zoomControl={false}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[24.374981, 91.410133]}>
                            <Popup>For development purpose only!</Popup>
                        </Marker>
                        <CustomZoomControl position="bottomright" />
                    </MapContainer>
                </div>
            </section>
        </section>
    );
};
export default MyMap
