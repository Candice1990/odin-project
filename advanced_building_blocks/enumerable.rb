module Enumerable

	def my_each
		return self unless block_given?
		for i in self
			yield(i)
		end
	end

	def my_each_with_index
		return self unless block_given?
		for i in 0...length
			yield(self[i], i)
		end
	end

	def my_select
		return self unless block_given?
		array = []
		my_each { |i| array << i if yield(i) }
		array
	end

	def my_all?
		if block_given?
			my_each { |i| return false unless yield(i) }
		else
			my_each { |i| return false unless i }
		end
		true
	end

	def my_any?
		if block_given?
			my_each { |i| return true if yield(i) }
		else
			my_each { |i| return true if i }
		end
		false
	end

	def my_none?
		if block_given?
			my_each { |i| return false if yield(i) }
		else
			my_each { |i| return false if i }
		end
		true
	end

	def my_count(num = nil)
		count = 0
		if block_given?
			my_each { |i| count += 1 if yield(i) }
		elsif num.nil?
			count = length
		else
			my_each { |i| count += 1 if count == num }
		end
		count
	end


	# def my_map
	# 	array = []
	# 	if block_given?
	# 		my_each { |i| array << yield(i) }
	# 		return array
	# 	else
	# 		return self
	# 	end
	# end

	def my_map(block)
		array = []
		if block
			my_each { |i| array << block.call(i) }
			return array
		else
			return self
		end
	end

	def my_inject(num = nil)
		num = self[0] if num.nil?
		my_each { |i| num = yield(num, i) }
		num
	end

end

def multiply_els(array)
	array.my_inject(1) { |product, i| product * i }
end