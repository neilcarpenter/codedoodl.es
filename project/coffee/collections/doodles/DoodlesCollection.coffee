AbstractCollection = require '../AbstractCollection'
DoodleModel        = require '../../models/doodle/DoodleModel'

class DoodlesCollection extends AbstractCollection

	model : DoodleModel

	getDoodleBySlug : (slug) =>

		doodle = @findWhere slug : slug

		if !doodle
			console.log "y u no doodle?"

		return doodle

	getDoodleByNavSection : (whichSection) =>

		section = @CD().nav[whichSection]

		doodle = @findWhere slug : "#{section.sub}/#{section.ter}"

		doodle

	getPrevDoodle : (doodle) =>

		index = @indexOf doodle
		index--

		if index < 0
			return _.last(@models)
		else
			return @at index

	getNextDoodle : (doodle) =>

		index = @indexOf doodle
		index++

		console.log 'getNextDoodle', index, doodle

		if index > (@length-1)
			return @at 0
		else
			return @at index

	getRandomUnseen : =>

		unseen = @filter (d) -> return !d.get('viewed')

		if !unseen.length
			@_markAllAsUnseen()
			return @getRandomUnseen()

		random = _.shuffle(unseen)[0]

		random

	_markAllAsUnseen : =>

		model.set({ 'viewed' : false }) for model in @models

		null

module.exports = DoodlesCollection
