async function getConnectedDevices(type) {
  let devices = await navigator.mediaDevices.enumerateDevices();

  if (type != undefined) {
    devices = devices.filter((device) => device.kind === type);
  }
  console.log("Cameras found:", devices);
}

// Updates the select element with the provided set of cameras
function updateCameraList(cameras) {
  const listElement = document.querySelector("select#availableCameras");
  listElement.innerHTML = "";
  cameras
    .map((camera) => {
      const cameraOption = document.createElement("option");
      cameraOption.label = camera.label;
      cameraOption.value = camera.deviceId;
    })
    .forEach((cameraOption) => listElement.add(cameraOption));
}


const videoCameras = getConnectedDevices();
