import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types"; // Importa PropTypes para validação das props
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Importa o CSS do Leaflet
import styles from "./Mapa.module.css"; // Importa o CSS Module para estilização
import markerIcone from "./../../assets/img/marker-icon.png";

// Definição do ícone personalizado
const mapaIcone = new L.Icon({
  iconUrl: markerIcone, // URL do ícone personalizado
  iconSize: [32, 48], // Tamanho do ícone
  iconAnchor: [16, 32], // Ponto no ícone que será usado para posicionar o marcador
  popupAnchor: [0, -32], // Ponto no ícone a partir do qual a popup deve abrir
});

function Mapa(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.whenCreated(() => {
        // Your code here to execute when the map is created
        console.log("Map created!");
      });
    }
  }, []);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={props.coordenada}
        zoom={13}
        className={styles.map}
        ref={mapRef}
        //whenCreated={handleMapInstance} // Define a instância do mapa
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={props.coordenada} icon={mapaIcone}>
          <Popup>
            <strong>{props.empresa}</strong>
            <br />
            {props.endereco}
          </Popup>
        </Marker>
        {/*
        <button className={styles.centerButton} onClick={handleCenterMap}>
          Centralizar Mapa
        </button>
        */}
      </MapContainer>
    </div>
  );
}

// Validação das props
Mapa.propTypes = {
  coordenada: PropTypes.arrayOf(PropTypes.number).isRequired,
  empresa: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
};

export default Mapa;
