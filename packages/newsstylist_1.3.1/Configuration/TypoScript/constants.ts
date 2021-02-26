# customsubcategory=scss=Scss path
# customsubcategory=layout=Layout
# customsubcategory=columns size=Columns size
# customsubcategory=show=Display options
# customsubcategory=svg=Svg size

// constants
plugin.tx_newsstylist {

  settings {

      # cat=plugin.tx_newsstylist/scss/101; type=string; label=Path to template SCSS folder
      scssPath = EXT:newsstylist/Resources/Public/Scss/Theme/
      
      # cat=plugin.tx_newsstylist/layout/200; type=options[default=default,newsletter plain output=newsletter-plain, card (toDO)=card]; label=Layout name, select any
      layout.name = default
    
      # cat=plugin.tx_newsstylist/layout/210; type=boolean; label=title on top, before text (left or right) and image (left or right)
      layout.headLineOnTop = 0

      # cat=plugin.tx_newsstylist/layout/211; type=string; label=Date format
      layout.dateFormat = %d/%m/%Y %H:%M

      # cat=plugin.tx_newsstylist/layout/212; type=boolean; label=Prints out the additional-infos before  the title
      layout.additionalInfoFirst = 0
    
      # cat=plugin.tx_newsstylist/layout/215; type=boolean; label=Prints out the Image on the right side
      layout.imageRight = 0
    
      # cat=plugin.tx_newsstylist/layout/220; type=options[button=button,text=text]; label=More link layout - button or text only
      layout.moreLink = button
      
      # cat=plugin.tx_newsstylist/columns size/250; type=string; label=Image column style - adjust respect the next input field
      layout.colImage = col-md-3

      # cat=plugin.tx_newsstylist/columns size/260; type=string; label=Text column style - adjust respect the previous input field
      layout.colText = col-md-9

      # cat=plugin.tx_newsstylist/show/300; type=boolean; label=Show or not the extra icons
      show.extraIcons = 1

      # cat=plugin.tx_newsstylist/show/310; type=boolean; label=Show or not the Image
      show.Image = 1
      
      # cat=plugin.tx_newsstylist/show/315; type=boolean; label=Show or not dummy image if no media
      displayDummyIfNoMedia = 1

      # cat=plugin.tx_newsstylist/show/320; type=boolean; label=Show or not "more link"
      show.moreLink = 1

       # cat=plugin.tx_newsstylist/show/330; type=boolean; label=Show or not the headline
      show.headLine = 1
      
       # cat=plugin.tx_newsstylist/show/340; type=boolean; label=Show or not the additional Infos, alias "extraInfo"
      show.extraInfo = 1

       # cat=plugin.tx_newsstylist/show/341; type=boolean; label=Show categories
       show.Categories = 1

       # cat=plugin.tx_newsstylist/show/342; type=boolean; label=Show tags
       show.Tags = 1

       # cat=plugin.tx_newsstylist/show/343; type=boolean; label=Show Author
       show.Author = 1

       # cat=plugin.tx_newsstylist/show/345; type=boolean; label=Show or not time field
       show.extraTime = 1

       # cat=plugin.tx_newsstylist/show/350; type=boolean; label=Show or not lead field
       show.lead = 1

       # cat=plugin.tx_newsstylist/svg/400; type=string; label=Svg icon width (pixels)
       svgicon.width = 18

       # cat=plugin.tx_newsstylist/svg/400; type=string; label=Svg icon height  (pixels)
       svgicon.height = 18
  }
}


