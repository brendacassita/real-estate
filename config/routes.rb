Rails.application.routes.draw do
  # generates all devise routes
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/properties', to:'properties#index'
    get '/properties/distinct_cities', to:'properties#distinct_cities'
    get '/properties/:city', to:'properties#city'

    get '/agents', to:'agents#index'

  end
end