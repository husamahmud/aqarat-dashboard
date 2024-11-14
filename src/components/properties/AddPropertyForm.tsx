import RequiredData from '@components/properties/RequiredData'

interface MediaProps {
  File: File
  isPrimary: boolean
}

interface FormData {
  Title: string
  CountryID: string
  CityID: string
  NeighborhoodID: string
  Longitude: string
  Latitude: string
  Address: string
  IsFeatured: string
  SakNumber: string
  ValLicenseNumber: string
  Video: File[]
  PropertyTypeID: string
  SpecificAqarTypesID: string
  Media: MediaProps[]
}

export default function AddPropertyForm() {
  return (
    <div className="">
      <RequiredData />
    </div>
  )
}
