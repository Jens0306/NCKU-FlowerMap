<?php
if(isset($_POST['submit']))
    {
    	// invoke the geojson file with geometries present
		$inp = file_get_contents('../js/location1.json');
		// decode the geojson file
		$tempArray = json_decode($inp, true);
		// preprare the structured array as defined for geojson files
		$feature = array(
		    'type' => 'Feature',
		    # Pass other attribute columns here
		    'properties' => array(
		        'color_qgis2leaf' => '#fff',
		        'tipo' => $_POST['tipo']
		    ),
		    'geometry' => array(
		        'type' => 'Point',
		        # Pass Longitude and Latitude Columns here
		        //receives the "hidden" coordinates from the POI popup
		        'coordinates' => array($_POST['lng'], $_POST['lat'])
		    )
		);
	    # Add feature arrays to feature collection array
	    array_push($tempArray['features'], $feature);
	    // encode the old geojson file and the arrays to add
		$jsonData = json_encode($tempArray, JSON_NUMERIC_CHECK);
		file_put_contents('../js/location1.json', $jsonData);
    }
?>
