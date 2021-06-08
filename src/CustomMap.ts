
// Instructions to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  
  showError: string; 
  // to show error in class which implements interface
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId),{
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable):void {
    const marker = new google.maps.Marker({
      position: mappable.location,
      map: this.googleMap,
      title: 'User Postion'
    });
    marker.addListener("click", ()=>{
      console.log(mappable.markerContent())
      this.addInfoWindow(mappable).open(this.googleMap,marker)
    })
  }

  addInfoWindow(mappable: Mappable):google.maps.InfoWindow {
    return new google.maps.InfoWindow({
      content: mappable.markerContent(),
    })
  }
}