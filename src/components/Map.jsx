// import { useEffect } from "react";
import KeplerGl from "@kepler.gl/components";
import {
    processCsvData,
    processGeojson,
    processRowObject,
} from "@kepler.gl/processors";
import { useDispatch } from "react-redux";
import { addDataToMap } from "@kepler.gl/actions";
import Locatordata from "./Locatordata";

const Map = () => {
    const dispatch = useDispatch();
    const handler = () => {
    console.log("clicked.....................");
    const data = Locatordata;

    const processedData = processCsvData(data); // Convert CSV data to usable format

    dispatch(
        addDataToMap({
            datasets: [
                {
                    info: {
                        label: "Station Locations",
                        id: "station_locations",
                    },
                    data: processedData,
                },
            ],
            config: {
                version: 'v1',
                config: {
                    visState: {
                        filters: [],
                        layers: [
                            {
                                id: 'station-layer',
                                type: 'point',
                                config: {
                                    dataId: 'station_locations',
                                    label: 'Stations',
                                    color: [255, 99, 71],
                                    columns: {
                                        lat: 'latitude',
                                        lng: 'longitude',
                                        altitude: null
                                    },
                                    isVisible: true,
                                    visConfig: {
                                        radius: 10,
                                        opacity: 0.8,
                                        colorRange: {
                                            name: 'Global Warming',
                                            type: 'sequential',
                                            category: 'Uber',
                                            colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300']
                                        },
                                        fixedRadius: false,
                                        outline: false,
                                        filled: true,
                                        strokeColor: [255, 255, 255],
                                        strokeColorRange: {
                                            name: 'ColorBrewer Set3',
                                            type: 'qualitative',
                                            category: 'ColorBrewer',
                                            colors: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072']
                                        },
                                        thickness: 2,
                                        radiusRange: [0, 50],
                                        elevationScale: 5
                                    }
                                },
                                visualChannels: {
                                    colorField: null,
                                    colorScale: 'quantile',
                                    sizeField: null,
                                    sizeScale: 'linear'
                                }
                            }
                        ],
                        interactionConfig: {
                            tooltip: {
                                fieldsToShow: {
                                    station_locations: ['station_name', 'latitude', 'longitude']
                                },
                                enabled: true
                            }
                        },
                        layerBlending: 'normal',
                        splitMaps: []
                    },
                    mapState: {
                        bearing: 0,
                        dragRotate: false,
                        latitude: 22.5, // Center based on your data
                        longitude: 78.9, // Center based on your data
                        pitch: 0,
                        zoom: 5,
                        isSplit: false
                    },
                    mapStyle: {
                        styleType: 'dark',
                        topLayerGroups: {},
                        visibleLayerGroups: {
                            label: true,
                            road: true,
                            border: false,
                            building: true,
                            water: true,
                            land: true
                        }
                    }
                }
            }
        })
    );
};


    return (
        <>
            <button onClick={handler}>hello</button>
            <KeplerGl
                id="map-id"
                mapboxApiAccessToken={import.meta.env.VITE_APP_MAPBOX_API_KEY}
                // latitude={20.5937}
                // longitude={78.9629}
                // zoom={10}
                width={1896}
                height={960}
            />
        </>
    );
};

export default Map;
