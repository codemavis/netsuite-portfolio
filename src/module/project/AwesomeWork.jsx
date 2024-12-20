import React from 'react'

import "../../assets/styles/awesomework.scss";

import work_1 from "../../assets/images/work_1.jpg";
import work_2 from "../../assets/images/work_2.jpg";
import work_3 from "../../assets/images/work_3.jpg";
import work_4 from "../../assets/images/work_4.jpg";

const AwesomeWork = () => {
    return (
        <div class="container awesome-work">
            <div class="section">
                <img src="https://via.placeholder.com/150" alt="Sales Management Automation" />
                <h2>Sales Management Automation</h2>
                <p>Streamline your sales processes with automated workflows for lead-to-cash cycles. From lead management to order fulfillment, we enhance visibility and efficiency across all sales operations.</p>
                <ul class="features">
                    <li>Automated sales order creation</li>
                    <li>Revenue tracking and forecasting</li>
                    <li>Real-time sales performance dashboards</li>
                </ul>
            </div>

            <div class="section">
                <img src="https://via.placeholder.com/150" alt="Purchasing & Procurement" />
                <h2>Purchasing & Procurement</h2>
                <p>Optimize your purchasing process by integrating supplier management and procurement workflows within NetSuite. Ensure timely order placements and cost control while maintaining strong vendor relationships.</p>
                <ul class="features">
                    <li>Purchase order automation</li>
                    <li>Vendor management and approvals</li>
                    <li>Expense tracking</li>
                </ul>
            </div>

            <div class="section">
                <img src="https://via.placeholder.com/150" alt="CRM Integration" />
                <h2>CRM Integration</h2>
                <p>Enhance customer relationships with a fully integrated CRM system that provides a 360-degree view of customer interactions. From lead generation to support, manage every touchpoint seamlessly.</p>
                <ul class="features">
                    <li>Centralized customer data</li>
                    <li>Campaign management</li>
                    <li>Case management and resolution</li>
                </ul>
            </div>

            <div class="section">
                <img src="https://via.placeholder.com/150" alt="Project Planning & Automation" />
                <h2>Project Planning & Automation</h2>
                <p>Transform project management with tools that simplify planning, execution, and tracking. Automate resource allocation, monitor project budgets, and ensure timely delivery of projects.</p>
                <ul class="features">
                    <li>Task and milestone tracking</li>
                    <li>Budget and resource planning</li>
                    <li>Real-time project analytics</li>
                </ul>
            </div>

            <div class="section">
                <img src="https://via.placeholder.com/150" alt="Trading & Inventory Management" />
                <h2>Trading & Inventory Management</h2>
                <p>Boost trading operations with NetSuite’s robust inventory and order management capabilities. Achieve real-time visibility into stock levels, streamline fulfillment, and minimize delays.</p>
                <ul class="features">
                    <li>Stock level alerts and reporting</li>
                    <li>Multi-location inventory management</li>
                    <li>Demand forecasting</li>
                </ul>
            </div>

            <div class="section">
                <img src="https://via.placeholder.com/150" alt="Order Management" />
                <h2>Order Management</h2>
                <p>Simplify order-to-cash workflows by automating key processes, from order creation to delivery and invoicing. Ensure accuracy and timeliness in order processing to enhance customer satisfaction.</p>
                <ul class="features">
                    <li>Order tracking and fulfillment</li>
                    <li>Pricing and discount automation</li>
                    <li>Return and refund management</li>
                </ul>
            </div>

            <div class="section">
                <img src="https://via.placeholder.com/150" alt="E-commerce Integration" />
                <h2>E-commerce Integration</h2>
                <p>Seamlessly integrate your online store with NetSuite for a unified e-commerce experience. Manage inventory, orders, and customer data in real-time, ensuring a smooth buyer journey.</p>
                <ul class="features">
                    <li>Shopping cart integration</li>
                    <li>Real-time inventory updates</li>
                    <li>Omni-channel order fulfillment</li>
                </ul>
            </div>
        </div>

    )
}

export default AwesomeWork