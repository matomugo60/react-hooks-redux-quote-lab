import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { addQuote } from './quotesSlice'

function QuoteForm() {
  const [formData, setFormData] = useState({
    content: '',
    author: '',
  })

  const dispatch = useDispatch()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const quote = { ...formData, id: uuid(), votes: 0 }
    dispatch(addQuote(quote))
    setFormData({
      content: '',
      author: '',
    })
  }

  // console.log(formData)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <div className='panel panel-default'>
            <div className='panel-body'>
              <form onSubmit={handleSubmit} className='form-horizontal'>
                <div className='form-group'>
                  <label htmlFor='content' className='col-md-4 control-label'>
                    Quote
                  </label>
                  <div className='col-md-5'>
                    <textarea
                      onChange={handleChange}
                      className='form-control'
                      id='content'
                      name='content'
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='author' className='col-md-4 control-label'>
                    Author
                  </label>
                  <div className='col-md-5'>
                    <input
                      onChange={handleChange}
                      className='form-control'
                      type='text'
                      id='author'
                      name='author'
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-md-6 col-md-offset-4'>
                    <button type='submit' className='btn btn-default'>
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteForm