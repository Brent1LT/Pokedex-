json.array! @guests do |guest|
    json.partial! 'guests', guest: guest
end 

