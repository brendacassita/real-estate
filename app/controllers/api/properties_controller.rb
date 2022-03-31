class Api::PropertiesController < ApplicationController

  def index
    render json: Property.available
  end
end