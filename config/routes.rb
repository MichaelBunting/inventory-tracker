Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get '/prototype(/:page)', to: 'prototype#index'

  get '*path', to: 'pages#index', :constraints => lambda{|req| req.path !~ /\.(png|jpg|svg)$/ }
end
