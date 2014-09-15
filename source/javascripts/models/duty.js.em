class DutyTwist.Duty
  name: ''
  image: null
  icon: null
  
  imageUrl: ~>
    @image || "/images/image-fallback.png"
    
  iconUrl: ~>
    @icon || @image