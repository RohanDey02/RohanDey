/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/08050850-6286-11ec-95f4-857fa1e75d77';

const FormStyle = styled.form`
    width: 100%;
    .form-group {
        width: 100%;
        margin-bottom: 2rem;
    }
    label {
        font-size: 1.8rem;
    }
    input,
    textarea {
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea {
        min-height: 250px;
        resize: vertical;
    }
    button[type='submit'] {
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
    }
`;

const ContactForm = () => {
    const [status, setStatus] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();

        const injectedData = {
            DYNAMIC_DATA_EXAMPLE: 123,
        };
        const inputs = e.target.elements;
        const data = {};

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        Object.assign(data, injectedData);

        const body = JSON.stringify(data);

        axios
            .post(FORM_ENDPOINT, body)
            .then((response) => {
                // It's likely a spam/bot request, so bypass it to validate via captcha
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement('input');
                        el.type = 'hidden';
                        el.name = key;
                        el.value = injectedData[key];

                        e.target.appendChild(el);
                    });

                    e.target.submit();
                    throw new Error('Please finish the captcha challenge');
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("We'll be in touch soon."))
            .catch((err) => setStatus(err.toString()));
    };

    if (status) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">{status}</div>
            </>
        );
    }

    return (
        <FormStyle>
            {/* Provided by HeroTofu */}
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Send a message
                    </button>
                </div>
            </form>
        </FormStyle>
    );
};

export default ContactForm;