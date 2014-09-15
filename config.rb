###
# Ember settings
###

activate :ember
activate :emberscript

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'
ignore /stylesheets\/(?!all).*\.css/

set :js_dir, 'javascripts'
ignore /javascripts\/(?!application).*\.js/

set :images_dir, 'images'

activate :autoprefixer

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  
  activate :relative_assets
  set :relative_links, true

  # Use relative URLs-
  # activate :relative_assets-

  # Enable cache buster
  # activate :asset_hash
end
